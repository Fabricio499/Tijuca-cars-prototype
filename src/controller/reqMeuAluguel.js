import Api from "../services/api";

export async function meuAluguel(idCliente) {
  try {
    const response = await Api.get(`alugueis/aluguelCliente/${idCliente}`);
    console.log(response.data.response.dados)
    return response.data.response.dados
  } catch (error) {
    console.log(error)
  }
}
