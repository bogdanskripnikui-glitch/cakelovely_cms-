const { getCheckoutTable, getSupabaseClient } = require("../lib/supabase");
const { getRequestSession } = require("../lib/auth");

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function roundMoneyValue(value) {
  return Math.round(Number(value) || 0);
}

function serializeSale(data) {
  return {
    id: data.id || crypto.randomUUID(),
    city: data.city,
    name: data.name,
    type: data.type,
    quantity: data.quantity,
    total: roundMoneyValue(data.total),
    payment: data.payment,
    employee: data.employee || "",
    orderNumber: data.order_number || "",
    date: data.sold_at,
  };
}

function isValidCheckoutPayload(payload) {
  const { city, name, type, quantity, total, payment } = payload;
  const quantityValue = Number(quantity);
  const totalValue = Number(total);

  return (
    !!city &&
    ["kharkiv", "lutsk"].includes(city) &&
    !!name &&
    !!type &&
    !!payment &&
    Number.isFinite(quantityValue) &&
    quantityValue > 0 &&
    Number.isFinite(totalValue) &&
    totalValue > 0
  );
}

function canReadCity(session, city) {
  return session.role === "stats" || session.city === city;
}

function isReadOnlySession(session) {
  return session.role === "stats";
}

module.exports = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    return response.end();
  }

  const session = getRequestSession(request);
  if (!session) return sendJson(response, 401, { error: "Потрібна авторизація" });

  if (request.method === "GET") {
    try {
      const city = request.query?.city;
      if (!city || !["kharkiv", "lutsk"].includes(city)) {
        return sendJson(response, 400, { error: "Некоректне місто" });
      }
      if (!canReadCity(session, city)) return sendJson(response, 403, { error: "Немає доступу до цієї філії" });

      const supabase = getSupabaseClient();
      const sales = [];
      let lastId;
      while (true) {
        let query = supabase.from(getCheckoutTable()).select("*").eq("city", city)
          .order("id", { ascending: true }).limit(500);
        if (lastId !== undefined) query = query.gt("id", lastId);
        const { data, error } = await query;
        if (error) return sendJson(response, 500, { error: error.message });
        if (!data?.length) break;
        sales.push(...data.map(serializeSale));
        lastId = data[data.length - 1].id;
      }
      sales.sort((a, b) => new Date(b.date) - new Date(a.date));
      return sendJson(response, 200, { ok: true, sales });
    } catch (error) {
      return sendJson(response, 500, { error: error.message || "Не вдалося завантажити продажі" });
    }
  }

  if (request.method === "DELETE") {
    if (isReadOnlySession(session)) return sendJson(response, 403, { error: "Режим доступний лише для перегляду" });
    try {
      const { id, city } = request.query || {};
      if (!id || !city || !["kharkiv", "lutsk"].includes(city)) {
        return sendJson(response, 400, { error: "Некоректні дані операції" });
      }
      if (session.city !== city) return sendJson(response, 403, { error: "Немає доступу до цієї філії" });

      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from(getCheckoutTable())
        .delete()
        .eq("id", id)
        .eq("city", city)
        .select("id")
        .maybeSingle();

      if (error) return sendJson(response, 500, { error: error.message });
      if (!data) return sendJson(response, 404, { error: "Операцію не знайдено" });
      return sendJson(response, 200, { ok: true, id: data.id });
    } catch (error) {
      return sendJson(response, 500, { error: error.message || "Не вдалося видалити операцію" });
    }
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST, DELETE, OPTIONS");
    return sendJson(response, 405, { error: "Метод не підтримується" });
  }

  if (isReadOnlySession(session)) return sendJson(response, 403, { error: "Режим доступний лише для перегляду" });

  try {
    const {
      city,
      name,
      type,
      quantity,
      total,
      payment,
      employee = "",
      orderNumber = "",
      date,
    } = request.body || {};

    if (!isValidCheckoutPayload({ city, name, type, quantity, total, payment })) {
      return sendJson(response, 400, { error: "Не заповнені обов’язкові поля" });
    }
    if (session.city !== city) return sendJson(response, 403, { error: "Немає доступу до цієї філії" });

    const payload = {
      city,
      name,
      type,
      quantity: Number(quantity),
      total: roundMoneyValue(total),
      payment,
      employee,
      order_number: orderNumber || null,
      sold_at: date || new Date().toISOString(),
    };

    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from(getCheckoutTable()).insert(payload).select().single();

    if (error) {
      return sendJson(response, 500, { error: error.message });
    }

    return sendJson(response, 200, {
      ok: true,
      sale: serializeSale(data),
    });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "Не вдалося оформити операцію" });
  }
};

module.exports.isValidCheckoutPayload = isValidCheckoutPayload;
module.exports.canReadCity = canReadCity;
module.exports.isReadOnlySession = isReadOnlySession;
