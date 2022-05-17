import Api from "../services/api";

export async function EditStatusAluguel(idAluguel, idCarro) {
  try {
    const response = await Api.patch(
      `alugueis/removeAluguel/${idAluguel}/${idCarro}`
    );

    return response;
  } catch (error) {
    return error;
  }
}
