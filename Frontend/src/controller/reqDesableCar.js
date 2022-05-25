import Api from '../services/api'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyErr = () =>
    toast.error("Esse veículo não pode ser desabilitado!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifySucc = () =>
    toast.success("O veículo foi desabilitado!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

export async function ReqDesativarCarro(idCarro){
    try {
        const response = await Api.patch(`carros/alteraStatus/${idCarro}`)
        notifySucc()
    } catch (error) {
        notifyErr()
        return error
    }
}