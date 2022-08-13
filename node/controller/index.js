const mysql = require('mysql');

// Conexion to DB
const conexion = mysql.createConnection({
    host : '167.250.5.45',
    database : 'brown_mastrosoft',
    user : 'brown_fer',
    password : 'b978434c1668b0005b2303ed66051b9a',
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
    const { id } = req.params;
    const { name, description, color, price } = req.body;

    conexion.query(`UPDATE autos SET name='${name}', description='${description}', color='${color}', price=${price} where id=${id}`, function (error, results) {
        if(results){
            return res.json({ message: "Register update !" });
        }
        return res.json({ message :  error.sqlMessage});
    });
};

const newAuto = (req, res) =>{
    const image = req.file.filename;
    const { name, description, color, price } = req.body;
    conexion.query(`INSERT INTO autos VALUES (null, '${name}', '${description}', '${color}', ${price}, '${image}')`, function (error, results) {
        if(results){
            return res.json({ message: "New Register Created !" });
        }
        return res.json({ message :  error.sqlMessage});
    });
};

const deleteAuto = (req, res) =>{
    const { id } = req.params;
    conexion.query(`DELETE FROM autos WHERE id=${id}`, function (error, results) {
        if(results){
            return res.json({ message: "Register Deleted !" });
        }
        return res.json({ message :  error.sqlMessage});
    });
};

module.exports = {
    all,
    getById,
    update,
    newAuto,
    deleteAuto
}