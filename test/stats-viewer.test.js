const assert = require("node:assert/strict");

process.env.AUTH_SECRET = "stats-viewer-test-secret";
process.env.CITY_PASSWORD_KHARKIV = "kharkiv-password";
process.env.CITY_PASSWORD_LUTSK = "lutsk-password";

const { createSessionToken, getCredentialsRole, getRequestSession } = require("../lib/auth");
const checkoutApi = require("../api/checkout");

assert.equal(getCredentialsRole("kharkiv", "111111"), "stats");
assert.equal(getCredentialsRole("lutsk", "111111"), "stats");
assert.equal(getCredentialsRole("kharkiv", "kharkiv-password"), "operator");
assert.equal(getCredentialsRole("lutsk", "lutsk-password"), "operator");
assert.equal(getCredentialsRole("kharkiv", "wrong-password"), null);

const viewerToken = createSessionToken("kharkiv", "stats");
const viewerSession = getRequestSession({ headers: { authorization: `Bearer ${viewerToken}` } });

assert.equal(viewerSession.role, "stats");
assert.equal(checkoutApi.canReadCity(viewerSession, "kharkiv"), true);
assert.equal(checkoutApi.canReadCity(viewerSession, "lutsk"), true);
assert.equal(checkoutApi.isReadOnlySession(viewerSession), true);

const operatorSession = { city: "kharkiv", role: "operator" };
assert.equal(checkoutApi.canReadCity(operatorSession, "kharkiv"), true);
assert.equal(checkoutApi.canReadCity(operatorSession, "lutsk"), false);
assert.equal(checkoutApi.isReadOnlySession(operatorSession), false);

async function verifyReadOnlyApi() {
  const request = {
    method: "POST",
    headers: { authorization: `Bearer ${viewerToken}` },
    body: {
      city: "kharkiv",
      name: "Bubble Tea",
      type: "drink",
      quantity: 1,
      total: 100,
      payment: "cash",
    },
  };
  const response = {
    headers: {},
    statusCode: 0,
    payload: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    end(value) {
      this.payload = value ? JSON.parse(value) : null;
    },
  };

  await checkoutApi(request, response);
  assert.equal(response.statusCode, 403);
  assert.equal(response.payload.error, "Режим доступний лише для перегляду");
}

verifyReadOnlyApi().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
