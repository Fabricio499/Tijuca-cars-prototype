import * as C from './styles'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { getSingleCar } from '../../../controller/reqSingleCar'
import { useState } from 'react'

export const CardCliente = ({
    idAluguel,
    idCarro,
    dataReserva,
    dataRetirada,
    dataEntrega,
    status,
    valorAluguel
}) => {

    const [nameCar, setNameCar] = useState('')

    async function getCar() {
        const responseCar = await getSingleCar(idCarro)
        setNameCar(responseCar.data.response[0].modelo)
    }
    getCar()

    return (
        <C.CardContainer>
            <header>
                <h2>{nameCar}</h2>
                {status == 0 ? 
                    <AiFillCheckCircle style={{ color: '#0D47A1', fontSize: '18pt' }} />
                :
                    <AiFillCloseCircle style={{ color: '#0D47A1', fontSize: '18pt' }} />
                }
                
            </header>
            <div className='informacoes'>
                <div className='campo-info'>
                    <span>Data da Reserva</span>
                    <p>{dataReserva}</p>
                </div>
                <div className='campo-info'>
                    <span>Data da Retirada</span>
                    <p>{dataRetirada}</p>
                </div>
                <div className='campo-info'>
                    <span>Data da Entrega</span>
                    <p>{dataEntrega}</p>
                </div>
                <div className='campo-info'>
                    <span>Valor</span>
                    <p>R${valorAluguel}</p>
                </div>
                <div className='status-div'>
                    <span>{status == 0 ? 'Ativo' : 'Inativo'}</span>
                </div>
            </div>
        </C.CardContainer>
    )
}