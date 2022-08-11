const express = require('express');
const routes = express.Router();
const controller = require('../controller/index');

routes.get('/autos', controller.all);

routes.get('/autos/:id', controller.getById)

routes.post('/autos/update/:id', controller.update);

module.exports = routes;