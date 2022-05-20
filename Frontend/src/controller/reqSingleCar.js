import Api from '../services/api'

export async function getSingleCar(idCarro){
    try {
        const response = await Api.get(`carros/${idCarro}`)
        return response
    } catch (error) {
        return error
    }
}