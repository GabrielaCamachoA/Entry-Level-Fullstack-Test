require('dotenv/config');

module.exports = {
  development: {
    username: process.env.USER_DB || 'postgres',
    password: process.env.PASSWORD_DB || '123456',
    database: process.env.NAME_DB || 'database_user',
    host: process.env.HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log
  },
  test: {
    username: process.env.DB_USER || 'testuser',
    password: process.env.DB_PASSWORD || 'testpassword',
    database: process.env.DB_NAME || 'testdatabase',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
};
