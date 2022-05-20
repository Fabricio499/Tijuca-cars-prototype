import Api from "../services/api";

export async function meuAluguel(idCliente) {
  try {
    const response = await Api.get(`alugueis/aluguelCliente/${idCliente}`);
    return response.data.response
  } catch (error) {
    return error
  }
}
