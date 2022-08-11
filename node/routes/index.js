const express = require('express');
const routes = express.Router();
const controller = require('../controller/index');

routes.get('/autos', controller.all);

routes.get('/autos/:id', controller.getById)

module.exports = routes;