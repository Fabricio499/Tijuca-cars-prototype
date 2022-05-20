const express = require('express')
const router = express.Router();
const mysql = require('../mysql').pool;
const login = require('../Middleware/login')

const CarrosControlles = require('../Controllers/carrosControllers')

//get geral de carros
router.get(
    '/',
    login.obrigatorio,
    CarrosControlles.getCarros
);
//get de carros que nao estao alugados
router.get(
    '/carrosDisponiveis',
    login.obrigatorio,
    CarrosControlles.getCarrosDisponiveis
);
//cadastra um carro
router.post(
    '/cadastro',
    login.obrigatorio,
    CarrosControlles.cadastroCarro
);
//get carros com id
router.get(
    '/:idCarro',
    login.obrigatorio,
    CarrosControlles.getCarrosId
);
//tratamento de erro do get carros
router.get(
    '/',
    CarrosControlles.getInsertCode
)
//aletra os dados do carro
router.patch(
    '/alterarCarro',
    login.obrigatorio,
    CarrosControlles.alteraCarro
);
//muda o status do carro para devolvido
router.patch(
    '/devolveCarro/:idCarro',
    login.obrigatorio,
    CarrosControlles.devolveCarro
);
//deleta um carro
router.delete(
    '/removeCarro/:idCarro',
    login.obrigatorio,
    CarrosControlles.removeCarro
);
//altera o status d
router.patch(
    '/alteraStatus/:idCarro',
    login.obrigatorio,
    CarrosControlles.mudaStatus
)

module.exports = router;