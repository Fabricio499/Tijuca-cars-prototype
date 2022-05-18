import Api from '../services/api'

export async function getTodosAlugueis() {
    try {
        const response = await Api.get('alugueis/alugueis')
        console.log(response)
        return response
    } catch (error) {
        return error
    }
}