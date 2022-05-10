import * as C from './styles'
import { Navbar } from '../../Components/Navbar'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'
import { CardCliente } from '../../Components/Cards/CardCliente/index.jsx'
import { CardAlguelAdm } from '../../Components/Cards/CardAluguelAdm'
import { CardCarros } from '../../Components/Cards/CardCarros'
import Api from '../../services/api'
import { useEffect, useState } from 'react'


export const AdminPage = () => {
    const [removeCars, setRemoveCars] = useState([])

    function removeCarro(id) {
        Api.delete(`carros/removeCarro/${id}`).then(({data}) => {
            setRemoveCars(removeCars.filter((removeCars) => removeCars.idCarro !== idCarro))
        })
    }

    const [cars, setCars] = useState([])

    useEffect(()=>{
        async function dataCar(){
            const response = await Api.get('carros/carros')
            setCars(response.data.response)
        }
        dataCar();
    }, [])



    return (
        <C.ContainerAdminPage>
            <Navbar />

            
            <div className='header-adm'>
                <h2>Bem-Vindo, ADM</h2>
            </div>
            <div className='all-aluguel'>
                <h2>Todos os aluguéis</h2>
                <div className='card-div'>
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                </div>
            </div>
            <div className='all-cars'>
                <h2>Todos os Carros</h2>
                <div className='card-div'>
                    {cars.length > 0 &&
                        cars.map((cars)=>(
                            <CardCarros
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