const { createSessionToken, getCredentialsRole, getRequestSession } = require("../lib/auth");

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

module.exports = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    return response.end();
  }

  if (request.method === "GET") {
    const session = getRequestSession(request);
    if (!session) return sendJson(response, 401, { error: "Сесія завершена" });
    return sendJson(response, 200, { ok: true, city: session.city, role: session.role });
  }

  if (request.method !== "POST") return sendJson(response, 405, { error: "Метод не підтримується" });

  const { city, password } = request.body || {};
  const role = getCredentialsRole(city, password);
  if (!city || !["kharkiv", "lutsk"].includes(city) || !role) {
    return sendJson(response, 401, { error: "Невірний пароль" });
  }

  return sendJson(response, 200, { ok: true, city, role, token: createSessionToken(city, role) });
};
