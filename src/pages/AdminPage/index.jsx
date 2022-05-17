import * as C from './styles'
import { useEffect, useState } from 'react'

import { Navbar } from '../../Components/Navbar'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'

// import { CardCliente } from '../../Components/Cards/CardCliente/index.jsx'
import { CardAlguelAdm } from '../../Components/Cards/CardAluguelAdm'
import { CardCarros } from '../../Components/Cards/CardCarros'
import Api from '../../services/api'
import { getTodosAlugueis } from '../../controller/reqTodosAlugueis'


export const AdminPage = () => {

    const [atualUser, setAtualUser] = useState(undefined)

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

    const [cars, setCars] = useState([])

    async function dataCar() {
        const response = await Api.get('carros/carros')
        console.log(response)
        setCars(response.data.response)
    }
    dataCar();

    // --> Remover Carros 
    function removeCarro(idCarro) {
        Api.delete(`carros/removeCarro/${idCarro}`).then(({ data }) => {
            setCars(cars.filter((cars) => cars.idCarro !== idCarro))
            //remove a consulta de acordo com o id
        })
            .catch((error) => {
                console.log('deu errro aki', error);
            })
    }

    const [todosAlugueis, setTodosAlugueis] = useState('')

    async function getAlugueis() {
        const response = await getTodosAlugueis()
        setTodosAlugueis(response.data.response)
    }
    getAlugueis()


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
        </C.ContainerAdminPage>
    )
}