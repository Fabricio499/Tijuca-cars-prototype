
import {Header, CloseIcon, Conteiner, Overlay} from './styles'
import {FormCliente} from '../FormCliente'

export const FormModalCliente = ({closeModal}) => {

    return (
            <Overlay>
            <Conteiner>
            <Header>
                <h1>Novo Aluguel</h1>
                <button onClick={closeModal}>
                    <CloseIcon  />
                </button>
            </Header>
            <FormCliente/>
            </Conteiner>
            </Overlay>
    )
}