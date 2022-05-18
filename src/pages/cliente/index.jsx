import {React, useEffect, useState} from 'react'
import * as C from './styles'
import {Navbar} from '../../Components/Navbar'
import {CardCliente}  from '../../Components/Cards/CardCliente'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'
import { FormModalCliente } from '../../Components/Form/FormModalCliente'
import Modal from 'react-modal/lib/components/Modal'
import Api from '../../services/api'
import { meuAluguel } from '../../controller/reqMeuAluguel'


export const Cliente = () => {
    
    // --> Buscar e setar alugueis do usuario especifico
    const [meusAlugueis, setMeusAlugueis] = useState('')
    useEffect(()=>{
        async function buscarMeusAlugueis(){
            const meuID = localStorage.getItem('UserID')
            const meusAlugueisGet = await meuAluguel(meuID)
            setMeusAlugueis(meusAlugueisGet)
        }
        buscarMeusAlugueis();
    }, [])


    const [openModal, setOpenModal] = useState(false)

    function fecharModal() {
        setOpenModal(false)
    }
    
    function abriModal(){
        setOpenModal(true)
    }

    const [atualUser, setAtualUser] = useState(undefined)

    useEffect(()=>{
        const idUser = localStorage.getItem('UserID')
        async function UserInfoPage() {
            const SingleUserInfo = await Api.get(`clientes/${idUser}`)
            setAtualUser(SingleUserInfo.data.response[0])
        }
        UserInfoPage()
    
    }, [])

    return (
        <C.ContainerCliente>
            
            <Navbar />
            <div className='content-cliente'>
                <h2>Bem vindo, {atualUser?.nome}</h2>
                <div className='content-info'>
                    <span>Meus Aluguéis</span>
                    <ButtonSubmit  onClick={abriModal} text="Inserir Aluguel"/>

                    <Modal
                        isOpen={openModal}
                        onRequesteClose={fecharModal}
                        contentLabel="Modal exemplo"
                        overleyClassName="modalCliente"
                        className='modalCliente'
                        ariaHideApp={false}
                    >
                        <FormModalCliente
                            closeModal={fecharModal}
                        />
                    </Modal> 
                </div>
                <div className='cards'>
                    {meusAlugueis.length > 0 &&
                        meusAlugueis.map((aluguel)=>(
                            <CardCliente 
                                key={aluguel.idAluguel}
                                idCarro={aluguel.idCarro}
                                idAluguel={aluguel.idAluguel}
                                dataReserva={aluguel.dataReserva}
                                dataRetirada={aluguel.dataRetirada}
                                dataEntrega={aluguel.dataEntrega}
                                valorAluguel={aluguel.valorAluguel}
                                status={aluguel.statusAluguel}
                            />
                        ))}
                </div>
            </div>
        </C.ContainerCliente>
    )
}