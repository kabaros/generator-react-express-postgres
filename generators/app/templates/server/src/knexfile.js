require('dotenv').config({ path: '../.env' });
const CONFIG = require('./config');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: CONFIG.DB_HOST,
      database: CONFIG.DB_NAME,
      user: CONFIG.DB_USER,
      password: CONFIG.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
