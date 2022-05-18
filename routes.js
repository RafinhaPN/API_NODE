const express = require('express');
const routes = express.Router();
const UserController = require('./controller/Usuario_controller');


routes.get('/',UserController.Store);
routes.post('/usuario',UserController.create);


module.exports = routes;