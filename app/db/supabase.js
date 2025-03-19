const { createClient } = require("@supabase/supabase-js")
const env = require("dotenv")
env.config()
const supabase = createClient(process.env.URL, process.env.SERVICE_KEY)

module.exports = supabase

