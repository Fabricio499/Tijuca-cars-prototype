import Api from "../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyErr = () =>
  toast.error("Falha na Autênticação!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export async function LoginCliente(email, senha) {
  try {
    const response = await Api.post("/clientes/login", {
      email: email,
      senha: senha,
    });
    return response;
  } catch (error) {
    console.log(error.response.data);
    notifyErr();
  }
}
