import { FormEditarAluguel } from '../formEditarAluguel'
import {Header, CloseIcon, Conteiner, Overlay} from './styles'

export const FormModalEditarAluguel = ({closeModal, idAluguel, idCarro}) => {

    return (
            <Overlay>
            <Conteiner>
            <Header>
                <h1>Editar aluguel</h1>
                <button onClick={closeModal}>
                    <CloseIcon  />
                </button>
            </Header>
            <FormEditarAluguel
                idAluguel={idAluguel}
                idCarro={idCarro}
            />
            </Conteiner>
            </Overlay>
    )
}