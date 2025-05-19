const db = require('./db');

db.query('SELECT 1', (err, result) => {
    if (err) {
        console.error('Ha ocurrido un error al hacer consulta: ', err)
    } else {
        console.log('Conexion verificada. Consulta realizada: ', result)
    }

    process.exit();
});