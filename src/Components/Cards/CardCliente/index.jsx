import * as C from './styles'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { getSingleCar } from '../../../controller/reqSingleCar'
import { useEffect, useState } from 'react'
import { FormModalEditarAluguel } from '../../Form/formModalEditarAluguel'
import Modal from 'react-modal/lib/components/Modal'

export const CardCliente = ({
    idAluguel,
    idCarro,
    dataReserva,
    dataRetirada,
    dataEntrega,
    status,
    valorAluguel
}) => {

    // --> Buscar e setar o nome do carro de acordo com cada aluguel
    const [nameCar, setNameCar] = useState('')
    useEffect(()=>{
        async function getCar() {
            const responseCar = await getSingleCar(idCarro)
            setNameCar(responseCar.data.response[0].modelo)
        }
        getCar()
    }, [])

    // --> Abrir modal de edição
    const [openModal, setOpenModal] = useState(false)
    function fecharModal() {
        setOpenModal(false)
    }
    function abriModal(){
        setOpenModal(true)
    }
    

    return (
        <C.CardContainer status={status}>
            <header>
                <div className='header-info'>
                    <h2>{nameCar}</h2>
                    {status == 0 ? 
                        <AiFillCheckCircle style={{ color: '#0D47A1', fontSize: '18pt' }} />
                    :
                        <AiFillCloseCircle style={{ color: '#0D47A1', fontSize: '18pt' }} />
                    }
                </div>
                <div className='edit' onClick={abriModal}>
                    <MdModeEdit />
                </div>
            </header>
            <div className='informacoes'>
                <div className='campo-info'>
                    <span>Data da Reserva</span>
                    <p>{dataReserva}</p>
                </div>
                <div className='campo-info'>
                    <span>Data da Retirada</span>
                    <p>{dataRetirada}</p>
                </div>
                <div className='campo-info'>
                    <span>Data da Entrega</span>
                    <p>{dataEntrega}</p>
                </div>
                <div className='campo-info'>
                    <span>Valor</span>
                    <p>R${valorAluguel}</p>
                </div>
                <div className='status-div'>
                    <span>{status == 0 ? 'Ativo' : 'Inativo'}</span>
                </div>
            </div>
            <Modal
                        isOpen={openModal}
                        onRequesteClose={fecharModal}
                        contentLabel="Modal exemplo"
                        overleyClassName="modalCliente"
                        className='modalCliente'
                        ariaHideApp={false}
                    >
                        <FormModalEditarAluguel
                            closeModal={fecharModal}
                            idAluguel={idAluguel}
                            idCarro={idCarro}
                        />
            </Modal> 
        </C.CardContainer>
    )
}