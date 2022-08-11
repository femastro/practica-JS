const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Conexion to DB
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

// Setting
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// Middllewares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// Routes
app.get('/autos', async (req, res) =>{
    conexion.query('SELECT * FROM autos', function (error, results) {
        if (!results.length > 0){
            return res.json({message: "BD EMPTY !"});
        }
        return res.json(results);
    });
})

app.get('/autos/:id', async (req, res) =>{
    const {id} = req.params;
    conexion.query(`SELECT * FROM autos where id=${id}`, function (error, results) {
        if (!results.length > 0){
            return res.json({ message: "Not Found !" });
        }else{
            return res.json(results);
        }
    });
})

// Start Server
app.listen(PORT, () => console.log(`Server runnig in PORT => ${PORT}`))



