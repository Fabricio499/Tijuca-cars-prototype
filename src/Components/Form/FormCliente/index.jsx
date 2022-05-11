import React from "react"
import {ContainerModalCliente} from './styled'
import { ButtonSubmit } from "../buttonSubmit"
import Api from '../../../services/api'
import {useState, useEffect} from 'react'

export const FormCliente = () => {

    const [cars, setCars] = useState([])
    const [carroAtual, setCarroAtual] = useState({})
    const [dias, setDias] = useState(0)
    const [dataRetirada, setDataRetirada] = useState('')
    const [valorAluguel, setValorAluguel] = useState('')

    useEffect(()=>{
        async function dataCar(){
            const response = await Api.get('carros/carros')
            setCars(response.data.response)
        }
        dataCar();
    }, [])

    
    useEffect(()=>{
        setValorAluguel(carroAtual * dias)
    }, [carroAtual, dias])

    /* async function novoAluguel(
        modelo,
        dataReserva,
        dataRetirada,
        dataEntrega,
        qtdeDiasAlugados,
        status
        ) {
        if(dias > 0 && dataRetirada.length > 0 && valorAluguel.length > 0){

            const dataReserva = new Date

            Api.post('alugueis/novoAluguel' {
                modelo: ,
                dataReserva: ,
                dataRetirada: ,
                dataEntrega: ,
                qtdeDiasAlugados: ,
                status: ,
            })
        }
    } */

    return(
        <ContainerModalCliente>
            <div className='form-model-cliente'>
            <div className='campo-input'>   
                <label>Modelo do Veículo</label>
                <select onChange={e => setCarroAtual(e.target.value)}>
                    <option value="" selected>
                        selecione um modelo
                    </option>
                    {cars.length > 0 && 
                        cars.map((cars)=>(
                            <option 
                                value={cars.valorDiaAluguel}
                            >{cars.modelo}</option>
                        ))
                    }
                </select>
            </div>

            <div className='campo-input'>
                <label>Data Retirada</label>
                <input 
                    type="date"  
                    onChange={e=>setDataRetirada(e.target.value)} 
                />
            </div>
            <div className='campo-input'> 
                <label>Quantidade de Dias</label>
                <input 
                    type="number" 
                    value={dias} 
                    min="1"
                    max="7"
                    onChange={e=>setDias(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                    />
            </div>
            <div className='price-div'>
                <p>Preço:</p>
                <span>R${valorAluguel}</span>
            </div>
            </div>

            <div className='submit-button-alugar'>
            <ButtonSubmit text="Alugar" />
            </div>
        </ContainerModalCliente>
    )
}

