import { ButtonSubmit } from '../../Form/buttonSubmit'
import { FormNovoCarro } from '../../Form/FormNovoCarro'
import * as C from './styles'
import {Header, CloseIcon, Conteiner, Overlay} from './styles'


export const ModalNovoCarro = ({closeModal}) => {
    return (
            <Overlay>
            <Conteiner>
            <Header>
                <h1>Novo Carro</h1>
                <button onClick={closeModal}>
                    <CloseIcon  />
                </button>
            </Header>
            <FormNovoCarro/>
            </Conteiner>
            </Overlay>
    )
}