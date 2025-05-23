const express = require("express");
const pool = require("../db");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const authMiddleware = require("../middleware/auth");
const bcrypt = require("bcrypt");

// Registro
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Comprueba que se completan todos los campos
  if (!username || !password)
    return res.status(400).json({ message: "Faltan datos" });
  try {
    // Sentencia para buscar si el usuario introducido ya existe
    const [existing] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    // Comprueba si el usuario ya existe
    if (existing.length > 0)
      return res.status(409).json({ message: "Usuario ya exsiste" });

    // Cifrado de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Sentencia para insertar un nuevo usuario
    await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    // Mensaje de confirmación
    res.status(201).json({
      message:
        "Registrado correctamente. \nRedirigiendo al inicio de sesión...",
    });
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});

// Inicio de sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // Comprueba que se completan todos los campos
  if (!username || !password)
    return res.status(400).json({ message: "Faltan datos" });
  try {
    // Sentencia para buscar si el usuario introducido existe
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (rows.length === 0)
      return res.status(401).json({ message: "Credenciales inválidas" });

    // Compara la contraseña introducida con la cifrada
    const validPassword = await bcrypt.compare(password, rows[0].password);
    if (!validPassword)
      return res.status(401).json({ message: "Credenciales inválidas" });

    // Mensaje de confirmación
    // Genera un token JWT
    const token = jwt.sign(
      { id: rows[0].id, username: rows[0].username },
      JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({
      message: "Inicio de sesión exitoso. \nRedirigiendo a su perfil...",
      token: token,
      username: rows[0].username,
      userId: rows[0].id,
    });
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});

// Agregar un juego a favoritos
router.post("/favorites", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;
  // Comprueba que se completan todos los campos
  if ( !gameId)
    return res.status(400).json({ message: "Faltan datos" });
  try {
    // Sentencia para insertar un nuevo favorito
    await pool.query(
      "INSERT INTO favorites (user_id, game_id) VALUES (?, ?)",
      [userId, gameId]
    );
    // Mensaje de confirmación
    res.status(201).json({ message: "Juego añadido a favoritos" });
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});

// Obtener los juegos favoritos de un usuario
router.get("/favorites", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  try {
    // Sentencia para obtener los juegos favoritos de un usuario
    const [rows] = await pool.query(
      "SELECT game_id FROM favorites WHERE user_id = ?",
      [userId]
    );
    // Mensaje de confirmación
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});

// Eliminar un juego de favoritos
router.delete("/favorites/:gameId", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.params;

  try {
    // Sentencia para eliminar un favorito
    await pool.query(
      "DELETE FROM favorites WHERE user_id = ? AND game_id = ?",
      [userId, gameId]
    );
    // Mensaje de confirmación
    res.status(200).json({ message: "Juego eliminado de favoritos" });
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});

// Borrar un usuario
router.delete("/delete", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    // Sentencia para eliminar un usuario
    await pool.query("DELETE FROM users WHERE id = ?", [userId]);
    // Mensaje de confirmación
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (err) {
    console.error(err);
    // Mensaje de error
    res.status(500).json({ message: "Error interno" });
  }
});


module.exports = router;
