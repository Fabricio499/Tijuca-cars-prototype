import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyErr = () =>
  toast.error("Não foi possivel fazer essa operação!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySucc = () =>
  toast.success("Status modificado!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export async function EditStatusAluguel(idAluguel, idCarro) {
  try {
    const response = await Api.patch(
      `alugueis/removeAluguel/${idAluguel}/${idCarro}`
    );
    notifySucc();
    return response;
  } catch (error) {
    notifyErr();
    return error;
  }
}
