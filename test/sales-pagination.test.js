const assert = require("node:assert/strict");

process.env.AUTH_SECRET = "pagination-test-secret";
const { createSessionToken } = require("../lib/auth");
const supabaseModule = require("../lib/supabase");
let rows = [];
let calls = 0;
let failOnPage = 0;
let cap = 500;

supabaseModule.getSupabaseClient = () => ({
  from() {
    let city;
    let cursor;
    let limit;
    return {
      select() { return this; },
      eq(column, value) { assert.equal(column, "city"); city = value; return this; },
      order(column, options) {
        assert.equal(column, "id");
        assert.equal(options.ascending, true);
        return this;
      },
      limit(value) { limit = value; return this; },
      gt(column, value) { assert.equal(column, "id"); cursor = value; return this; },
      then(resolve, reject) {
        calls++;
        const result = calls === failOnPage
          ? { error: { message: "Database unavailable" } }
          : { data: rows.filter(row => row.city === city && (!cursor || row.id > cursor))
            .sort((a, b) => a.id.localeCompare(b.id)).slice(0, Math.min(cap, limit)) };
        return Promise.resolve(result).then(resolve, reject);
      },
    };
  },
});
const handler = require("../api/checkout");

async function load(city = "kharkiv") {
  calls = 0;
  const response = {
    setHeader() {},
    end(body) { this.body = JSON.parse(body); },
  };
  await handler({ method: "GET", query: { city }, headers: {
    authorization: `Bearer ${createSessionToken("kharkiv", "operator")}`,
  } }, response);
  return response;
}

(async () => {
  for (const count of [0, 500, 1205]) {
    rows = Array.from({ length: count }, (_, index) => ({
      id: String(index + 1).padStart(8, "0"), city: "kharkiv", total: 100,
      sold_at: new Date(Date.UTC(2026, 6, 1) + index * 3600000).toISOString(),
    }));
    rows.push({ id: "99999999", city: "lutsk", sold_at: "2026-10-01T00:00:00Z" });
    const result = await load();
    assert.equal(result.statusCode, 200);
    assert.equal(result.body.sales.length, count);
    assert.equal(new Set(result.body.sales.map(sale => sale.id)).size, count);
    if (count) {
      assert.equal(result.body.sales.at(-1).date, "2026-07-01T00:00:00.000Z");
      assert.equal(result.body.sales[0].id, String(count).padStart(8, "0"));
    }
    assert.equal(calls, Math.ceil(count / 500) + 1);
  }
  cap = 200;
  assert.equal((await load()).body.sales.length, 1205);
  failOnPage = 2;
  const failed = await load();
  assert.equal(failed.statusCode, 500);
  assert.equal(failed.body.sales, undefined);
  assert.equal((await load("lutsk")).statusCode, 403);
  assert.equal(calls, 0);
  console.log("Sales pagination checks passed");
})().catch(error => { console.error(error); process.exitCode = 1; });
