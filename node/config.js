const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : 'localhost',
    database : 'prueba',
    user : 'root',
    password : '',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
});

