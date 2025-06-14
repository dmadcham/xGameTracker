const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,          // localhost
    user: process.env.DB_USER,          // root
    password: process.env.DB_PASSWORD,  // 1234
    database: process.env.DB_NAME,      // testdb
    port: process.env.DB_PORT           // 3306
});

module.exports = pool;