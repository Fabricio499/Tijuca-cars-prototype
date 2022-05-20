import Api from '../services/api'

export async function getSingleUser(idCliente){
    try {
        const response = Api.get(`clientes/${idCliente}`)
        return response
    } catch (error) {
        return error
    }
}