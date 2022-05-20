const jwt = require('jsonwebtoken');

exports.obrigatorio =  (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(token){
            const decode = jwt.verify(token, process.env.JWT_KEY);
            // console.log(req.headers.authorization)
            req.clientes = decode;    
            next();
        }else{
            return res.status(403).send({ 
                mensagem:'Token não inserido'
            })
        }
    } catch (error) {
        return res.status(401).send({ 
            mensagem:'Falha na autenticação'
        })
    }
}

exports.opcional = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.clientes = decode;
        next();
    } catch (error) {
        next();
    }
}