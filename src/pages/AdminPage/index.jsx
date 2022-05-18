import * as C from './styles'
import { useEffect, useState } from 'react'

import { Navbar } from '../../Components/Navbar'
import { CardAlguelAdm } from '../../Components/Cards/CardAluguelAdm'
import { CardCarros } from '../../Components/Cards/CardCarros'
import Api from '../../services/api'
import { getTodosAlugueis } from '../../controller/reqTodosAlugueis'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const AdminPage = () => {

    // --> Feedbacks de erros
    const notifyErr = () =>
    toast.error("Esse carro não pode ser removido!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifySucc = () =>
    toast.success("Carro removido!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const [atualUser, setAtualUser] = useState(undefined)

    // --> Capturar informações do cliente e validar se pode acessar essa rota!
    useEffect(() => {
        const idUser = localStorage.getItem('UserID')

        async function UserInfoPage() {
            const SingleUserInfo = await Api.get(`clientes/${idUser}`)
            if (SingleUserInfo.data.response[0].adm == 0) {
                window.location.href = "/cliente"
            }

        }
        UserInfoPage()

    }, [])

    // --> Pegar todos os carros disponiveis
    const [cars, setCars] = useState([])
    useEffect(()=>{
        async function dataCar() {
            const response = await Api.get('carros')
            console.log(response)
            setCars(response.data.response)
        }
        dataCar();
    },[])

    // --> Remover Carros 
    function removeCarro(idCarro) {
        Api.delete(`carros/removeCarro/${idCarro}`).then(({ data }) => {
            setCars(cars.filter((cars) => cars.idCarro !== idCarro))
            notifySucc()
            //remove a consulta de acordo com o id
        })
            .catch((error) => {
                console.log('deu errro aki', error);
                notifyErr()
            })
    }

    const [todosAlugueis, setTodosAlugueis] = useState('')

    // --> Pegar todos os alugueis, independente do status
    useEffect(()=>{
        async function getAlugueis() {
            const response = await getTodosAlugueis()
            setTodosAlugueis(response.data.response)
        }
        getAlugueis()

    }, [])


    return (
        <C.ContainerAdminPage>
            <Navbar />

            <div className='header-adm'>
                <h2>Bem vindo, Admin</h2>
            </div>
            <div className='all-aluguel'>
                <h2>Todos os aluguéis</h2>
                <div className='card-div'>
                    {todosAlugueis.length > 0 &&
                        todosAlugueis.map((tdsAlugueis) => (
                            <CardAlguelAdm
                                key={tdsAlugueis.idAluguel}
                                idAluguel={tdsAlugueis.idAluguel}
                                idCarro={tdsAlugueis.idCarro}
                                idCliente={tdsAlugueis.idCliente}
                                reserva={tdsAlugueis.dataReserva}
                                retirada={tdsAlugueis.dataRetirada}
                                entrega={tdsAlugueis.dataEntrega}
                                valor={tdsAlugueis.valorAluguel}
                                status={tdsAlugueis.statusAluguel}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='all-cars'>
                <h2>Todos os Carros</h2>
                <div className='card-div'>
                    {cars.length > 0 &&
                        cars.map((cars) => (
                            <CardCarros
                                key={cars.idCarro}
                                idCarro={cars.idCarro}
                                modelo={cars.modelo}
                                ano={cars.ano}
                                cor={cars.cor}
                                placa={cars.placa}
                                status={cars.status}
                                valor={cars.valorDiaAluguel}
                                handleRemove={removeCarro}
                            />

                        ))
                    }

                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </C.ContainerAdminPage>
    )
}