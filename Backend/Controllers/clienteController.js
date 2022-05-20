const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const idadeMininma = require('../Function/fuctionAnos')

//get geral de clientes
exports.getClientes = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) };
        conn.query(
            'SELECT * FROM clientes',
            (error, resultado, fields) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                return res.status(200).send({ response: resultado });
            }

        )
    })
}
//cadastra um cliente
exports.cadastraClientes = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        conn.query('SELECT * FROM clientes WHERE email = ?',
            [req.body.email], (error, result,) => {
                if (error) { return res.status(500).send({ error: error }) }
                if (result.length > 0) {
                    res.status(409).send({
                        mensagem: 'Email ja cadastrado'
                    })
                }
                else {
                    conn.query('SELECT * FROM clientes WHERE cnh = ?',
                        [req.body.cnh], (error, result,) => {
                            if (error) { return res.status(500).send({ error: error }) }
                            if (result.length > 0) {
                                res.status(409).send({
                                    mensagem: 'CNH ja cadastrado'
                                })
                            } else {
                                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                                    const calcula = idadeMininma(new Date(), new Date(req.body.dataNascimento))
                                    if (calcula >= 20) {
                                        if (errBcrypt) { return res.status(500).send({ error: error }) };
                                        conn.query(
                                            `INSERT INTO clientes (
                                            nome, 
                                            cnh, 
                                            dataNascimento, 
                                            email, 
                                            telefone, 
                                            senha,
                                            adm,
                                            statusCliente
                                                            ) 
                                         VALUES (?,?,?,?,?,?,?,?)`,
                                            [
                                                req.body.nome,
                                                req.body.cnh,
                                                req.body.dataNascimento,
                                                req.body.email,
                                                req.body.telefone,
                                                hash,
                                                req.body.admin,
                                                req.body.status
                                            ],
                                            (error, result) => {
                                                conn.release();

                                                if (error) { res.status(500).send({ error: error, response: null }) }
                                                const response = {
                                                    mensagem: 'Cliente cadastrado com Sucesso!',
                                                    clienteCriado: {
                                                        nome: req.body.nome,
                                                        cnh: req.body.cnh,
                                                        dataNascimento: req.body.dataNascimento,
                                                        email: req.body.email,
                                                        telefone: req.body.telefone,
                                                        senha: hash,
                                                        statusCliente: req.body.status
                                                    }
                                                }

                                                res.status(201).send(response)
                                            })
                                    } else {
                                        res.status(401).send({ mensagem: 'O cliente precisa possuir pelo menos 20 anos!!' })
                                    }
                                })
                            }

                        })
                }
            })
    })
}
//faz o validação do usuario e o login no sistema
exports.login = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        const query = 'SELECT * FROM clientes WHERE email =?'
        conn.query(query, [req.body.email], (error, results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length < 1) {
                return res.status(401).send({
                    mensagem: 'Falha na autenticação'
                })
            }

            bcrypt.compare(req.body.senha, results[0].senha, (error, result) => {
                if (error) {
                    return res.status(401).send({
                        mensagem: 'Falha na autenticação'
                    })
                }
                if (result) {
                    let token = jwt.sign({
                        idCliente: results[0].idCliente,
                        email: results[0].email,
                        adm: results[0].adm
                    }, process.env.JWT_KEY,
                        {
                            expiresIn: "2h"
                        })

                    return res.status(200).send({
                        mensagem: 'Autenticado com sucesso',
                        token: token,
                        adm: results[0].adm,
                        idCliente: results[0].idCliente
                    })
                }

                return res.status(401).send({ mensagem: 'Falha na autenticação' })

            })

        })
    })
}
//get de cliente por id
exports.getClienteId = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) };
        conn.query(
            'SELECT * FROM clientes WHERE idCliente = ?;',
            [req.params.idCliente],
            (error, resultado, fields) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado });
            }
        )
    })
}
//altera os dados do cliente
exports.alteraCliente = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) };
        console.log(conn)
        conn.query(
            `UPDATE clientes
             SET nome   = ?,
                 email  = ?
             WHERE idCliente = ?`,
            [
                req.body.nome,
                req.body.email,
                req.body.idCliente
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }) }

                return res.status(202).send({
                    mensagem: 'Cliente alterado com sucesso',
                    idCliente: resultado.insertId
                })
            }
        )
    });
}
//deleta um cliente
exports.removeCliente = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try {
            if (error) { return res.status(500).send({ error: error }) };
            conn.query(
                'DELETE FROM clientes WHERE idCliente = ?', [req.params.idCliente],
                (error, resultado, field) => {
                    conn.release();
                    if (error) {
                        res.status(500).send({
                            error: error,
                            response: null
                        })
                    }
                    res.status(202).send({
                        mensagem: 'Cliente removido com sucesso',
                        idCarro: resultado.insertId
                    })
                }
            )

        } catch (error) {
            console.log(error.mensagem)
        }
    })
}