const express = require('express')
const router = express.Router();
const login = require('../Middleware/login')

const AlugueisControlles = require('../Controllers/alugueisControlle')

//get alugueis filtrados
router.get(
    '/filtroAluguel',
    login.obrigatorio,
    AlugueisControlles.getAluguelFiltro
);
//get da data dos alugueis dos carros
router.get(
    '/dataAluguel/:idCarro',
    login.obrigatorio,
    AlugueisControlles.getDataCarro
);
//get dos alugueis do cliente
router.get(
    '/aluguelCliente/:idCliente',
    login.obrigatorio,
    AlugueisControlles.getAluguelCliente
);
//get geral dos alugueis
router.get(
    '/alugueis',
    login.obrigatorio,
    AlugueisControlles.getAluguel
);
//cadastra aluguel
router.post(
    '/novoAluguel',
    AlugueisControlles.novoAluguel
);
//get aluguel por id
router.get(
    '/:idAluguel',
    AlugueisControlles.getAluguelId
);
//altera um aluguel
router.patch(
    '/alteraAluguel',
    AlugueisControlles.alteraAluguel
);
//remove um aluguel
router.patch(
    '/removeAluguel/:idAluguel/:idCarro/:idCliente',
    AlugueisControlles.removeAluguel
);

module.exports = router;