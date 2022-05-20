const express = require('express')
const router = express.Router();
const login = require('../Middleware/login')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const ClienteControllers = require('../Controllers/clienteController')

//get geral de clientes
router.get(
    '/clientes',
    ClienteControllers.getClientes
);
//cadastra um cliente
router.post(
    '/cadastro',
    login.obrigatorio,
    ClienteControllers.cadastraClientes
);
//get clientes por id
router.get(
    '/:idCliente',
    ClienteControllers.getClienteId
)
//login
router.post(
    '/login',
    ClienteControllers.login
)
//altera os dados do cliente
router.patch(
    '/editarCliente',
    login.obrigatorio,
    ClienteControllers.alteraCliente
)
//deleta um cliente
router.delete(
    '/removeCliente/:idCliente',
    login.obrigatorio,
    ClienteControllers.removeCliente
)

module.exports = router;