const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const conexion = require('./config');

const app = express();

app.use(cors());

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

app.listen(PORT, () => console.log(`Server runnig in port ${PORT}`))



