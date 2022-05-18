import Api from "../services/api";

export async function meuAluguel(idCliente) {
  try {
    const response = await Api.get(`alugueis/aluguelCliente/${idCliente}`);
    console.log(response)
    return response.data.response
  } catch (error) {
    console.log(error)
  }
}
