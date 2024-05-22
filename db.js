const { Pool } = require('pg');
require('dotenv');

const pool = new Pool({
  user: 'postgres',
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'online_mart',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
