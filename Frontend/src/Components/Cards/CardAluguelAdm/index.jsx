import * as C from './styles'

import { ModalEdit } from '../../modals/ModalEdit'

import {
AiFillCheckCircle,
AiFillCloseCircle,
AiOutlineEdit
}
    from 'react-icons/ai'
import { useState, useEffect } from 'react'

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


    // --> Abrir modal de editar status
    const [verEdicao, setVerEdicao] = useState(false)

    const abrirEdit = () => {
        setVerEdicao(true)
    }

    const fecharEdit = () => {
        setVerEdicao(false)
    }

    // --> Pegar e setar valores do Carro de acordo com seu ID
    const [nameCar, setNameCar] = useState('')
    const [plateCar, setPlateCar] = useState('')
    useEffect(()=>{
        async function getCar() {
            const responseCar = await getSingleCar(idCarro)
            setPlateCar(responseCar.data.response[0].placa)
            setNameCar(responseCar.data.response[0].modelo)
        }
        getCar()
    }, [])

    // --> Pegar e setar valores do Usuário
    const [userName, setUserName] = useState('')
    useEffect(()=>{
        async function getUser() {
            const responseUser = await getSingleUser(idCliente)
            setUserName(responseUser.data.response[0].nome)
        }
        getUser()
    },[])

    return (
        <C.CardAlguelAdmContainer status={status}>

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
                    idCliente={idCliente}
                    closeModal={fecharEdit}
                />
            </Modal>

            <div className='header-card'>
                <div className='info-client'>
                    <span>Cliente:</span><p>{userName}</p>
                </div>
                {status == 0 ? 
                    <div className='edit' onClick={abrirEdit}>
                            <AiOutlineEdit />
                    </div>
                :
                    <div className='edit' style={{cursor: 'not-allowed'}}>
                            <AiOutlineEdit style={{filter: 'brightness(60%)'}}/>
                    </div>
                }
            </div>
            <div className='info-card'>
                <div className='single-info'>
                    <span>Modelo:</span><p>{nameCar}</p>
                </div>
                <div className='single-info'>
                    <span>Placa:</span><p>{plateCar}</p>
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