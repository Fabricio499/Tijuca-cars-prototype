import {React, useState} from 'react';
import {Container, Content} from './styled'
import {FaTimes, FaUserAlt,} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'
import Modal from 'react-modal'
import SidebarItem from '../SidebarItem'
import {ModalNovoCliente} from '../modals/ModalNovoCliente'
import { useLocation } from 'react-router-dom'
import { ButtonSubmit } from '../Form/buttonSubmit';
import { ModalNovoCarro } from '../modals/ModalNovoCarro';

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }

    const rota = useLocation()
    const rotaAtual = rota.pathname 


    const [verModalCliente, setVerModalCliente] = useState(false)
    const [verModalCarro, setVerModalCarro] = useState(false)

    function abrirModalCliente() {setVerModalCliente(true)}
    function fecharModalCliente() {setVerModalCliente(false)}
    
    function abrirModalCarro() {setVerModalCarro(true)}
    function fecharModalCarro() {setVerModalCarro(false)}


    return (
        <Container sidebar={active}>
            
            <FaTimes onClick={closeSidebar}/>         
             <Content>
                {rotaAtual === '/cliente' ? (
                    <>
                    <SidebarItem Icon={BiLogOut} Text='Sair' />
                    </>
                ):(
                    <>
                   
                   <button className='btn-modal' onClick={abrirModalCliente} ><FaUserAlt />Adicionar Cliente
                   
                        <Modal
                            isOpen={verModalCliente}
                            onRequesteClose={fecharModalCliente}
                            contentLabel="modal exemplo"
                            overleyClassName="modalCliente"
                            className='modalCliente'
                            ariaHideApp={false}
                        >
                            <ModalNovoCliente
                            closeModal={fecharModalCliente}
                            />
                        </Modal> 
                   </button>
                    
                    <button className='btn-modal' onClick={abrirModalCarro}> 
                        <AiFillCar /> Adicionar Carro

                        <Modal
                            isOpen={verModalCarro}
                            onRequesteClose={fecharModalCarro}
                            contentLabel="modal exemplo"
                            overleyClassName="modalCliente"
                            className='modalCliente'
                            ariaHideApp={false}
                        >
                            <ModalNovoCarro
                                closeModal={fecharModalCarro}
                            />
                        </Modal> 
                    </button>

                    <SidebarItem Icon={BiLogOut} Text='Sair' />
                </>)
                }
            </Content>
        </Container>
    )
}
export default Sidebar;