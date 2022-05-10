import {React, useEffect, useState} from 'react'
import * as C from './styles'
import {Navbar} from '../../Components/Navbar'
import { CardCliente } from '../../Components/Cards/CardCliente'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'
import { FormModalCliente } from '../../Components/Form/FormModalCliente'
import Modal from 'react-modal/lib/components/Modal'
import Api from '../../services/api'


export const Cliente = () => {
    
    const [openModal, setOpenModal] = useState(false)

    function fecharModal() {
        setOpenModal(false)
    }
    
    function abriModal(){
        setOpenModal(true)
    }

    return (
        <C.ContainerCliente>
            
            <Navbar />
            <div className='content-cliente'>
                <div className='content-info'>
                    <span>Meus Aluguéis</span>
                    <ButtonSubmit  onClick={abriModal} text="Inserir Aluguel"/>

                    <Modal
                        isOpen={openModal}
                        onRequesteClose={fecharModal}
                        contentLabel="Modal exemplo"
                        overleyClassName="modalCliente"
                        className='modalCliente'
                    >
                        
                        <FormModalCliente
                            closeModal={fecharModal}
                        />
                    </Modal> 
                </div>
                <div className='cards'>
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                </div>
            </div>
        </C.ContainerCliente>
    )
}