import * as C from './styles.js'
import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDoNotDisturb } from 'react-icons/md'
import { RiMapPinUserLine } from 'react-icons/ri'


export const EditCardForm = () => {
    
    return (
       <C.ContainerEditCard>
           <h2>Selecione um novo Status</h2>
           <div className='div-status'>
                <div className='single-status'>
                    <label>Cancelado</label>
                    <MdOutlineDoNotDisturb />
                </div>
                <div className='single-status'>
                    <label>Agendado</label>
                    <AiOutlineClockCircle />
                </div>
                <div className='single-status'>
                    <label>Em uso</label>
                    <RiMapPinUserLine />
                </div>
                <div className='single-status'>
                    <label>Devolvido</label>
                    <AiOutlineCheckCircle />
                </div>
           </div>
       </C.ContainerEditCard>
    )
}