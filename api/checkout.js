const { getCheckoutTable, getSupabaseClient } = require("../lib/supabase");

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

module.exports = async (request, response) => {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed" });
  }

  try {
    const {
      name,
      type,
      quantity,
      total,
      payment,
      employee = "",
      orderNumber = "",
      date,
    } = request.body || {};

    if (!name || !type || !quantity || !total || !payment) {
      return sendJson(response, 400, { error: "Missing required checkout fields" });
    }

    const payload = {
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
      sale: {
        id: data.id || crypto.randomUUID(),
        name: data.name,
        type: data.type,
        quantity: data.quantity,
        total: data.total,
        payment: data.payment,
        employee: data.employee || "",
        orderNumber: data.order_number || "",
        date: data.sold_at,
      },
    });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "Checkout failed" });
  }
};
