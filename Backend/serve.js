const http = require('http');
const app = require('./app')
const port = process.env.PORT || 4400 ;
const serve = http.createServer(app);
serve.listen(port, ()=>(console.log('Servidor ativo na porta 4400')));

