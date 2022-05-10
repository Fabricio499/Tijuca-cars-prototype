import { ButtonSubmit } from '../../Form/buttonSubmit'
import { EditCardForm } from '../../Form/EditCardForm'
import * as C from './styles'
import {Header, CloseIcon, Conteiner, Overlay} from './styles'


export const ModalEdit = ({closeModal}) => {
    return (
            <Overlay>
            <Conteiner>
            <Header>
                <h1>Editar Status</h1>
                <button onClick={closeModal}>
                    <CloseIcon  />
                </button>
            </Header>
            <EditCardForm />
            </Conteiner>
            </Overlay>
    )
}