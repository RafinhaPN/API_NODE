const express = require('express');
const app = express();
const routes = require('../routes');
require('../models/db');
require('../models/Usuario');
require('../routes');

app.use(express.json());
app.use(routes);

app.listen(2222,function(){
    console.log("Rodando servidor");
})