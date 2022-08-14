const express = require('express');
const routes = express.Router();
const controller = require('../controller/index');

var multer = require('multer');
var fecha = Date.now();

var ruta = multer.diskStorage(
    {
        destination: (req, file, callback) => {
            callback(null,'img/');
        },
        filename: (req, file, callback) => {
            callback(null, fecha+"_"+file.originalname);
        }
    }
);

var cargar = multer({ storage: ruta})


routes.get('/autos', controller.all);

routes.get('/autos/:id', controller.getById)

routes.post('/autos/update/:id', controller.update);

routes.post('/autos/new', cargar.single("image"), controller.newAuto);

routes.delete('/autos/delete/:id', controller.deleteAuto);

module.exports = routes;