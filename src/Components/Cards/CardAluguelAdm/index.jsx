import * as C from './styles'

import { ModalEdit } from '../../modals/ModalEdit'

import {
AiFillCheckCircle,
AiFillCloseCircle,
AiOutlineEdit
}
    from 'react-icons/ai'
import { useState } from 'react'

import Modal from 'react-modal'
import { getSingleCar } from '../../../controller/reqSingleCar'
import { getSingleUser } from '../../../controller/reqSingleUser'

export const CardAlguelAdm = ({
    idAluguel,
    idCliente,
    idCarro,
    reserva,
    retirada,
    entrega,
    valor,
    status
}) => {



    const [verEdicao, setVerEdicao] = useState(false)

    const abrirEdit = () => {
        setVerEdicao(true)
    }

    const fecharEdit = () => {
        setVerEdicao(false)
    }

    const [nameCar, setNameCar] = useState('')

    async function getCar() {
        const responseCar = await getSingleCar(idCarro)
        setNameCar(responseCar.data.response[0].modelo)
    }
    getCar()

    async function getUser() {
        const responseUser = await getSingleUser(idCliente)
        console.log(responseUser)
    }
    getUser()

    return (
        <C.CardAlguelAdmContainer>

            <Modal
                isOpen={verEdicao}
                onRequesteClose={fecharEdit}
                contentLabel="Modal exemplo"
                overleyClassName="modalCliente"
                className='modalCliente'
            >

                <ModalEdit
                    idAluguel={idAluguel}
                    idCarro={idCarro}
                    closeModal={fecharEdit}
                />
            </Modal>

            <div className='header-card'>
                <div className='info-client'>
                    <span>Cliente:</span><p>{idCliente}</p>
                </div>
                <div className='edit' onClick={abrirEdit}>
                    <AiOutlineEdit />
                </div>
            </div>
            <div className='info-card'>
                <div className='single-info'>
                    <span>Modelo:</span><p>{nameCar}</p>
                </div>
                <div className='single-info'>
                    <span>Placa:</span><p>Nome</p>
                </div>
                <div className='single-info'>
                    <span>Retirada:</span><p>{retirada}</p>
                </div>
                <div className='single-info'>
                    <span>Entrega:</span><p>{entrega}</p>
                </div>
                <div className='single-info'>
                    <span>Valor:</span><p>{valor}</p>
                </div>
            </div>
            <div className='status-icon'>
                {status == 0 ?
                    <AiFillCheckCircle style={{ color: '#F9A826' }} />
                    :
                    <AiFillCloseCircle style={{ color: '#F9A826' }} />}
            </div>
        </C.CardAlguelAdmContainer>
    )
}