const mysql = require("mysql2/promise");
require("dotenv").config();

async function init() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,          // localhost
    user: process.env.DB_USER,          // root
    password: process.env.DB_PASSWORD,  // 1234
    database: process.env.DB_NAME,      // testdb
    port: process.env.DB_PORT           // 3306
  });

  await conn.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `);

  console.log('Tabla "users" creada (si no existía)');
  await conn.end();
}

init().catch(console.error);
