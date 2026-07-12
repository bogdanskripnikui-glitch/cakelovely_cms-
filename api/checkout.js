const { getCheckoutTable, getSupabaseClient } = require("../lib/supabase");

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
  if (request.method === "GET") {
    try {
      const city = request.query?.city;
      if (!city || !["kharkiv", "lutsk"].includes(city)) {
        return sendJson(response, 400, { error: "Некоректне місто" });
      }

      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from(getCheckoutTable()).select("*").eq("city", city).order("sold_at", { ascending: false });
      if (error) return sendJson(response, 500, { error: error.message });
      return sendJson(response, 200, { ok: true, sales: (data || []).map(serializeSale) });
    } catch (error) {
      return sendJson(response, 500, { error: error.message || "Не вдалося завантажити продажі" });
    }
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST");
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
