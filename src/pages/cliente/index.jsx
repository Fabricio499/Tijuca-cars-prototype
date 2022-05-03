import {React, useState} from 'react'
import * as C from './styles'
import {Navbar} from '../../Components/navbar'
import { CardCliente } from '../../Components/CardCliente'
import { ButtonSubmit } from '../../Components/buttonSubmit'
import { FormModalCliente } from '../../Components/FormModalCliente'
import Modal from 'react-modal/lib/components/Modal'




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