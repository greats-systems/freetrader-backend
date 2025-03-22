const { createClient } = require("@supabase/supabase-js")
const env = require("dotenv")
env.config()
const supabase = createClient(process.env.SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

module.exports = supabase

