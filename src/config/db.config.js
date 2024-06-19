require('dotenv').config();
const { Sequelize } = require('sequelize');
const env =  process.env;

const sequelize = new Sequelize(
  env.DB_NAME || 'online-mart',
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
