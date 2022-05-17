import * as C from './styles.js'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { EditStatusAluguel } from '../../../controller/reqEditStatusAluguel.js'

export const EditCardForm = ({idAluguel, idCarro}) => {
    
    async function EditStatus(){
        const response = EditStatusAluguel(idAluguel, idCarro)
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
       </C.ContainerEditCard>
    )
}