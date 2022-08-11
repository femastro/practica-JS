const mysql = require('mysql');

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

const all = async (req, res) =>{
    conexion.query('SELECT * FROM autos', function (error, results) {
        if (!results.length > 0){
            return res.json({message: "BD EMPTY !"});
        }
        return res.json(results);
    });
};

const getById = async (req, res) =>{
    const {id} = req.params;
    conexion.query(`SELECT * FROM autos where id=${id}`, function (error, results) {
        if (!results.length > 0){
            return res.json({ message: "Not Found !" });
        }else{
            return res.json(results);
        }
    });
};

const update = async (req, res) =>{
    const {id} = req.params;
    const { description, color, price } = req.body;

    conexion.query(`UPDATE autos SET description='${description}', color='${color}', price=${price} where id=${id}`, function (error, results) {
        console.log(error);
        if(results){
            return res.json({ message: "Register update !" });
        }
        return res.json({ message :  error.sqlMessage});
    });
};

module.exports = {
    all,
    getById,
    update
}