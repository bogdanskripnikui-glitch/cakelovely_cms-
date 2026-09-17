const crypto = require("crypto");

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30;
const STATS_VIEWER_PASSWORD = process.env.STATS_VIEWER_PASSWORD || "111111";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured");
  return secret;
}

function encode(value) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload) {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

function safeEqual(value, expected) {
  if (typeof value !== "string" || typeof expected !== "string") return false;
  const actualBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(actualBuffer, expectedBuffer);
}

function createSessionToken(city, role = "operator") {
  const payload = encode(JSON.stringify({ city, role, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS }));
  return `${payload}.${sign(payload)}`;
}

function verifySessionToken(token) {
  if (!token || !token.includes(".")) return null;
  const [payload, signature] = token.split(".");
  const expected = sign(payload);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(actualBuffer, expectedBuffer)) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!session.city || !session.exp || session.exp <= Math.floor(Date.now() / 1000)) return null;
    return { ...session, role: session.role === "stats" ? "stats" : "operator" };
  } catch {
    return null;
  }
}

function getRequestSession(request) {
  const header = request.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  return verifySessionToken(token);
}

function isValidPassword(city, password) {
  const expected = city === "kharkiv" ? process.env.CITY_PASSWORD_KHARKIV : process.env.CITY_PASSWORD_LUTSK;
  return !!expected && safeEqual(password, expected);
}

function getCredentialsRole(city, password) {
  if (safeEqual(password, STATS_VIEWER_PASSWORD)) return "stats";
  if (isValidPassword(city, password)) return "operator";
  return null;
}

module.exports = { createSessionToken, getCredentialsRole, getRequestSession, isValidPassword };
