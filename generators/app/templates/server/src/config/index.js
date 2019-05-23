require('dotenv').config();

let CONFIG = {};

// CONFIG.app_version = process.env.npm_package_version || '1.0.0';

CONFIG.LISTEN_PORT = parseNumber(process.env.PORT || 4000);

// Database
CONFIG.DB_HOST = process.env.DB_HOST;
CONFIG.DB_NAME = process.env.DB_NAME;
CONFIG.DB_USER = process.env.DB_USER;
CONFIG.DB_PASSWORD = process.env.DB_PASSWORD;

// JWT Secret and Expiration
CONFIG.JWT_SECRET = process.env.JWT_SECRET;
CONFIG.JWT_EXPIRATION = process.env.JWT_EXPIRATION;

/**
 * Parse String to number
 * @param {string} val
 */
function parseNumber(val) {
  const number = parseInt(val);
  if (isNaN(number)) {
    return val;
  }

  if (number >= 0) {
    return number;
  }

  return false;
}

/**
 * Parse String into boolean value
 * @param {string} val
 */
function parseBoolean(val) {
  if (val.toLowerCase() === 'true') return true;
  return false;
}

module.exports = CONFIG;
