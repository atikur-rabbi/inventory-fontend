require('dotenv').config()
const Pool = require('pg').Pool
const connectionString = process.env.postgress_url ;
const pool = new Pool({ connectionString })

module.exports = pool;