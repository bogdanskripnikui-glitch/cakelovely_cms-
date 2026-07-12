const { createClient } = require("@supabase/supabase-js");

let cachedClient;

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getSupabaseClient() {
  if (cachedClient) return cachedClient;

  cachedClient = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return cachedClient;
}

function getCheckoutTable() {
  return process.env.SUPABASE_CHECKOUT_TABLE || "checkout_events";
}

module.exports = {
  getSupabaseClient,
  getCheckoutTable,
};
