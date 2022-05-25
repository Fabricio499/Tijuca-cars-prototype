import Api from '../services/api'

export async function getTodosAlugueis() {
    try {
        const response = await Api.get('alugueis/alugueis')
        return response
    } catch (error) {
        return error
    }
}