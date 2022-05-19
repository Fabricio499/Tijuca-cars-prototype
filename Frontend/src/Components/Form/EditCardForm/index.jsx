import * as C from './styles.js'
import { AiFillCloseCircle } from 'react-icons/ai'
import { EditStatusAluguel } from '../../../controller/reqEditStatusAluguel.js'
import { ToastContainer } from "react-toastify";

export const EditCardForm = ({idAluguel, idCarro, idCliente}) => {
    
    async function EditStatus(){
        const response = EditStatusAluguel(idAluguel, idCarro, idCliente)
        console.log(response)
    }

    return (
       <C.ContainerEditCard>
           <h2>Selecione um novo Status</h2>
           <div className='div-status' onClick={EditStatus}>
                <div className='single-status'>
                    <label>Finalizado</label>
                    <AiFillCloseCircle />
                </div>
           </div>
           <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
       </C.ContainerEditCard>
    )
}