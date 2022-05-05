
import { FormNovoCliente } from '../../Form/FormNovoCliente'
import {Header, CloseIcon, Conteiner, Overlay} from './styles'


export const ModalNovoCliente = ({closeModal}) => {
    return (
            <Overlay>
            <Conteiner>
            <Header>
                <h1>Novo Cliente</h1>
                <button onClick={closeModal} >
                    <CloseIcon />
                </button>
            </Header>
            <FormNovoCliente/>
            </Conteiner>
            </Overlay>
    )
}