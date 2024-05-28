require('dotenv').config();
console.log(__dirname);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const env = process.env;

const db = {
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME || 'online-mart',
  port: env.DB_PORT || 5432,
  dialect: 'postgres',
};

module.exports = {
  development: db,
  test: db,
  production: db,
};

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
