import React from "react"
import {ContainerModalCliente} from './styled'
import { ButtonSubmit } from "../buttonSubmit"
import Api from '../../../services/api'
import {useState, useEffect} from 'react'

export const FormCliente = () => {

    const [cars, setCars] = useState([])
    const [carroAtual, setCarroAtual] = useState({})

    useEffect(()=>{
        async function dataCar(){
            const response = await Api.get('carros/carros')
            setCars(response.data.response)
        }
        dataCar();
    }, [])

    const [data1, setData1] = useState('')
    const [dias, setDias] = useState('')
    
    useEffect(()=>{console.log(carroAtual.idCarro)}, [carroAtual])

    const [dataFinal, setDataFinal] = useState('')


    return(
        <ContainerModalCliente>
            <div className='form-model-cliente'>
            <div className='campo-input'>   
                <label>Modelo do Veículo</label>
                <select>
                    <option value="---" selected>selecione um modelo</option>
                    {cars.length > 0 && 
                        cars.map((cars)=>(
                            <option 
                                onChange={e=>setCarroAtual(e.target.value)}
                                value={cars.idCarro}
                            >{cars.modelo}</option>
                        ))
                    }
                </select>
            </div>

            <div className='campo-input'>
                <label>Data Retirada</label>
                <input 
                    type="date" 
                    value={data1} 
                    onChange={e=>setData1(e.target.value)} 
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
                    />
            </div>
            <div className='price-div'>
                <p>Preço:</p>
                <span></span>
            </div>
            </div>

            <div className='submit-button-alugar'>
            <ButtonSubmit text="Alugar" />
            </div>
        </ContainerModalCliente>
    )
}

