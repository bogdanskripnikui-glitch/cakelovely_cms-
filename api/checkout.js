const { getCheckoutTable, getSupabaseClient } = require("../lib/supabase");
const { getRequestSession } = require("../lib/auth");

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function serializeSale(data) {
  return {
    id: data.id || crypto.randomUUID(),
    city: data.city,
    name: data.name,
    type: data.type,
    quantity: data.quantity,
    total: data.total,
    payment: data.payment,
    employee: data.employee || "",
    orderNumber: data.order_number || "",
    date: data.sold_at,
  };
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
      if (session.city !== city) return sendJson(response, 403, { error: "Немає доступу до цієї філії" });

      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from(getCheckoutTable()).select("*").eq("city", city).order("sold_at", { ascending: false });
      if (error) return sendJson(response, 500, { error: error.message });
      return sendJson(response, 200, { ok: true, sales: (data || []).map(serializeSale) });
    } catch (error) {
      return sendJson(response, 500, { error: error.message || "Не вдалося завантажити продажі" });
    }
  }

  if (request.method === "DELETE") {
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

    if (!city || !["kharkiv", "lutsk"].includes(city) || !name || !type || !quantity || !total || !payment) {
      return sendJson(response, 400, { error: "Не заповнені обов’язкові поля" });
    }
    if (session.city !== city) return sendJson(response, 403, { error: "Немає доступу до цієї філії" });

    const payload = {
      city,
      name,
      type,
      quantity: Number(quantity),
      total: Number(total),
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
