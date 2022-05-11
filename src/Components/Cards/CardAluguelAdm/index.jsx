import * as C from './styles'

import { ModalEdit } from '../../modals/ModalEdit'

import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDoNotDisturb } from 'react-icons/md'
import { RiFlashlightLine, RiMapPinUserLine } from 'react-icons/ri'
import { useState } from 'react'

import Modal from 'react-modal'

export const CardAlguelAdm = () => {

    const [verEdicao, setVerEdicao] = useState(false)

    const abrirEdit = () => {
        setVerEdicao(true)
    }

    const fecharEdit = () => {
        setVerEdicao(false)
    }

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
                            closeModal={fecharEdit}
                        />
                    </Modal> 

            <div className='header-card'>
                <div className='info-client'>
                    <span>Cliente:</span><p>NOME</p>
                </div>
            <div className='edit' onClick={abrirEdit}>
                <AiOutlineEdit />   
            </div>
            </div>
            <div className='info-card'>
                <div className='single-info'>
                    <span>Modelo:</span><p>Nome</p>
                </div>
                <div className='single-info'>
                    <span>Placa:</span><p>Nome</p>
                </div>
                <div className='single-info'>
                    <span>Retirada:</span><p>Nome</p>
                </div>
                <div className='single-info'>
                    <span>Entrega:</span><p>Nome</p>
                </div>
                <div className='single-info'>
                    <span>Valor:</span><p>Nome</p>
                </div>
            </div>
            <div className='status-icon'>
                <AiOutlineClockCircle />
            </div>
        </C.CardAlguelAdmContainer>
    )
}