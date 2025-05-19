const express = require('express');
const pool = require('../db');
const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // Comprueba que se completan todos los campos
    if (!username || !password) return res.status(400).json({ message: 'Faltan datos' });
    try {
        // Sentencia para buscar si el usuario introducido ya existe
        const [existing] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        // Comprueba si el usuario ya existe
        if (existing.length > 0) return res.status(409).json({ message: 'Usuario ya exsiste' });
        
        // Sentencia para insertar un nuevo usuario
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        // Mensaje de confirmación
        res.status(201).json({ message: 'Registrado correctamente. \nRedirigiendo al inicio de sesión...'});
    } catch(err) {
        console.error(err);
        // Mensaje de error
        res.status(500).json({ message: 'Error interno' });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    // Comprueba que se completan todos los campos
    if (!username || !password) return res.status(400).json({ message: 'Faltan datos' });
    try {
        // Sentencia para buscar si los datos introducidos coinciden con un usuario y su contraseña
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        // Comprueba si el usuario y contraseña son válidas
        if (rows.length === 0) return res.status(401).json({ message: 'Credenciales inválidas' });
        
        // Mensaje de confirmación
        res.status(200).json({ message: 'Inicio de sesión exitoso. \nRedirigiendo a su perfil...'});
    } catch(err) {
        console.error(err);
        // Mensaje de error
        res.status(500).json({ message: 'Error interno' });
    }
});

module.exports = router;
