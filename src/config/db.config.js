require('dotenv').config();
const { Sequelize } = require('sequelize');
const env = process.env;

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

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
