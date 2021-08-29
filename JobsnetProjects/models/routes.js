const express = require('express');
const CadidateController = require('../controllers/CadidateController');
const routes = new express.Router();

routes.post('/register' , CadidateController.register);
routes.get('/', (req, res) => {
    res.send("Funcionou ");
});
module.exports = routes;