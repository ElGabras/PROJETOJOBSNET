const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('../routes');
const app = express();

mongoose.connect('mongodb+srv://sosgabriel:Gabriel@15@cluster0.x4b1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser: true,
useCreateIndex: true
});

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('rodando na porta 5000');    
});