const mysql = require("mysql2/promise");
require("dotenv").config();

async function init() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST, // localhost
    user: process.env.DB_USER, // xgtadmin
    password: process.env.DB_PASSWORD, // admin1234
    database: process.env.DB_NAME, // xgametracker
    port: process.env.DB_PORT, // 3306
  });

  await conn.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `);

  await conn.query(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      game_id INT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  console.log('Tabla "users" creada (si no existía)');
  console.log('Tabla "favorites" creada (si no existía)');
  await conn.end();
}

init().catch(console.error);
