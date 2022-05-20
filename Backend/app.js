const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const cors = require("cors")
const rotaClientes = require('./Routes/clientes')
const rotaCarros = require('./Routes/carros')
const rotaAlugueis = require('./Routes/alugueis')


app.use(morgan('dev'));
// apenas dados simples 
app.use(bodyParser.urlencoded({ extended: false }));
//json de entrada no body
app.use(bodyParser.json());
//configuração do cors
app.use(cors())
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type , Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

//rotas
app.use('/clientes', rotaClientes)
app.use('/carros', rotaCarros)
app.use('/alugueis', rotaAlugueis)

//Tratamento de erro quando nao encontra a rota
app.use((req, res, next) => {
    res.status(401).send({mensagem: 'Rota nao encontrada'})
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({erro: {mensagem: error.mensagem}})
})


module.exports = app;