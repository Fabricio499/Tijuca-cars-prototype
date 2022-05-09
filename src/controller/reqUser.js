import Api from '../services/api'

export async function LoginCliente(email, senha) {
try {
    const response =  await Api.post('/clientes/login', {
        email: email,
        senha: senha,
    })
    return response;
} catch (error) {
    console.log("aquiiiii",error.response.data)
}
}