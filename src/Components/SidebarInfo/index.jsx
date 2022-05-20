import { React } from 'react';
import { Container, Content } from './styled'
import { FaTimes } from 'react-icons/fa';
import face from '../../assets/image/face.svg';
import inst from '../../assets/image/inst.svg';
import lin from '../../assets/image/lin.svg'
const SidebarInfo = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
    const handleLogout = () => {
        window.location.href="/"
    }
    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                    <div className='cabecalho'>
                        <button className='btn-modal'>
                            <a  className='btn-a' href="#alugar">Como alugar um carro?</a>
                        </button>
                        <button className='btn-modal'>
                            <a  className='btn-a' href="#pagamento">  Sobre o pagamento?  </a>
                        </button>
                        <button className='btn-modal'>
                            <a  className='btn-a' href="#dias">Condições da devolução</a>
                        </button>
                        <button className='btn-modal'>
                            <a  className='btn-a' href="#modelos">Quais os modelo de carros?</a>
                        </button>
                        <button className='btn-modal'>
                            <a  className='btn-a' href="#retirada">O que precisa levar na retirada?</a>
                        </button>
                        
                
                      </div>    
            </Content>
        </Container>
    )
}
export default SidebarInfo;