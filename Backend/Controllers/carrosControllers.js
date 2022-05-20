const { send } = require("express/lib/response");

const mysql = require("../mysql").pool;

//get de todos os carros
exports.getCarros = (req, res, next) => {
  try {
    mysql.getConnection((error, conn) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      conn.query("SELECT * FROM carros", (error, resultado, fields) => {
        conn.release();
        if (error) {
          throw error;
        }
        return res.status(200).send({ response: resultado });
      });
      
    });
    
  }
  catch (error) {
    return res.status(500).send({ error: error})
  }

};
//get dos carros que não estao alugados
exports.getCarrosDisponiveis = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM carros WHERE statusCarro = 3",
      (error, resultado, fields) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        conn.release();
        return res.status(200).send({ response: resultado });
      }
    );
  });
};
//cadastra um carro
exports.cadastroCarro = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT * FROM carros WHERE placa = ?",
      [req.body.placa],
      (error, result) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        if (result.length > 0) {
          res.status(409).send({
            mensagem: "Placa ja cadastrado",
          });
        } else {
          if (error) {
            return res.status(500).send({ error: error });
          }
          conn.query(
            `INSERT INTO carros (
                            modelo, 
                            placa, 
                            ano, 
                            cor, 
                            valorDiaAluguel, 
                            statusCarro) 
                            VALUES (?,?,?,?,?,?)`,
            [
              req.body.modelo,
              req.body.placa,
              req.body.ano,
              req.body.cor,
              req.body.valorDiaAluguel,
              req.body.status,
            ],
            (error, result) => {
              conn.release();

              if (error) {
                res.status(500).send({ error: error, response: null });
              }
              const response = {
                mensagem: "Carro Criado com sucesso",
                clienteCriado: {
                  modelo: req.body.modelo,
                  placa: req.body.placa,
                  ano: req.body.ano,
                  cor: req.body.cor,
                  valorDiaAluguel: req.body.valorDiaAluguel,
                  status: req.body.status,
                },
              };

              res.status(201).send(response);
            }
          );
        }
      }
    );
  });
};
//get de carros por id
exports.getCarrosId = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM carros WHERE idCarro = ?;",
      [req.params.idCarro],
      (error, resultado, fields) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        conn.release();
        return res.status(200).send({ response: resultado });
      }
    );
  });
};
//altera o status do carro para devolvido se ele estiver em uso
exports.devolveCarro = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error: error }) };
    conn.query(
      `Select * from carros WHERE idCarro = ?`,
      [req.params.idCarro],
      (error, result, field) => {
        if (error) { return res.status(500).send({ error: error }) }

        if (result[0].statusCarro === 2) {
          conn.query(
            `UPDATE carros 
              SET statusCarro = 3
              WHERE idCarro = ?`,
            [req.params.idCarro]
          )
          res.status(200).send({ mensagem: 'Carro devolvido com sucesso' })
        } else {
          if (error) { return res.status(500).send({ error: error }) }
          conn.release();
          res.status(200).send({ mensagem: 'O Carro ja foi devolvido' })
        }
      }
    )
  })
};
//tratamento de erro do get carros
exports.getInsertCode = (req, res, next) => {
  return res.status(200).send({ response: "Adicione um idCarro para a rota!" });
};
//altera os dados de um carro
exports.alteraCarro = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    console.log(conn);
    conn.query(
      `UPDATE carros
             SET modelo   = ?,
                 placa    = ?,
                 ano      =?,
                 cor      =?,
                 valorDiaAluguel  =?,
                 status   =?
             WHERE idCarro = ?`,
      [
        req.body.modelo,
        req.body.placa,
        req.body.ano,
        req.body.cor,
        req.body.valorDiaAluguel,
        req.body.status,
        req.body.idCarro,
      ],
      (error, resultado, field) => {
        conn.release();

        if (error) {
          res.status(500).send({
            error: error,
            response: null,
          });
        }
        res.status(202).send({
          mensagem: "Carro alterado com sucesso",
          idCarro: resultado.insertId,
        });
      }
    );
  });
};
//deleta um carro
exports.removeCarro = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    try {
      if (error) {
        return res.status(500).send({ error: error });
      }
      conn.query(
        "DELETE FROM carros WHERE idCarro = ?",
        [req.params.idCarro],
        (error, resultado, field) => {
          conn.release();
          if (error) {return res.status(500).send({error: error, response: null})};
          res.status(202).send({mensagem: "Carro removido com sucesso", idCarro: resultado.insertId,});
        }
      );
    } catch (error) {
      return res.status(500).send({ error: error})
    }
  });
};
//muda status do Carro
exports.mudaStatus = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {return res.status(500).send({ error: error })};
    conn.query(
      `UPDATE carros
      SET statusCarro = 0
      WHERE idCarro = ?`,
      [req.body.idCarro],
      (error,result) => {
        conn.release();
          if (error) {return res.status(500).send({error: error, response: null,})};
          res.status(202).send({mensagem: "Status do carro alterado com sucesso"});

      }
    )
  })
}
