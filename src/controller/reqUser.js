import Api from '../services/api'

export async function LoginCliente(email, senha) {
    const response =  await Api.post('/clientes/login', {
        email: email,
        senha: senha,
    })
    return response;
}