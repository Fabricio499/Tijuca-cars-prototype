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
    const [dataEntrega, setDataEntrega] = useState('')
    const [valorAluguel, setValorAluguel] = useState(0)
    const [dataAtual, setDataAtual] = useState('')
    const [infoCar, setInfoCar] = useState(undefined)

    const status = 3;
    const [idCliente, setIdCliente] = useState(undefined)

    useEffect(()=>{
        const buscarId = localStorage.getItem('UserID')
        setIdCliente(buscarId)
        console.log(idCliente)
    },[])


    useEffect(()=>{
        async function dataCar(){
            const response = await Api.get('carros/carrosDisponiveis')
            setCars(response.data.response)
        }
        dataCar();
    }, [])

    
    useEffect(()=>{
        async function getSingleCar() {
            const responseInfo = await Api.get(`carros/${carroAtual}`)
            setInfoCar(responseInfo.data.response[0])
            console.log(infoCar.valorDiaAluguel)
            setValorAluguel(infoCar.valorDiaAluguel * dias)
        }
        getSingleCar()
    }, [carroAtual, dias])


    function dataDaReserva() {
        const PegarData = new Date();
        const diaa = String(PegarData.getDate()).padStart(2, '0');
        const dia = parseInt(diaa)
        const mes = String(PegarData.getMonth() + 1).padStart(2, '0');
        const ano = PegarData.getFullYear();
        setDataAtual(dia + '/' + mes + '/' + ano);
        setDataEntrega(dia + 2 + '/' + mes + '/' + ano)
        console.log(dataAtual)
        console.log(dataEntrega)
    } 
    

    async function novoAluguel(
        idCarro,
        idCliente,
        dataReserva,
        dataRetirada,
        dataEntrega,
        qtdeDiasAlugados,
        status,
        ) {
            dataDaReserva();
        if(valorAluguel > 0){
          const response = Api.post('alugueis/novoAluguel', {
                idCarro: carroAtual,
                idCliente: idCliente,
                dataReserva: dataAtual,
                dataRetirada: dataRetirada,
                dataEntrega: dataEntrega,
                qtdeDiasAlugados: dias,
                status: status,
            })
            console.log(response)
        } 
    }

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
                                value={cars.idCarro}
                            >{cars.modelo}  -  {cars.placa}</option>
                        ))
                    }
                </select>
            </div>

            <div className='campo-input'>
                <label>Data Retirada</label>
                <input 
                    value={dataRetirada}
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
                    max="30"
                    onChange={e=>setDias(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                    />
            </div>
            <div className='price-div'>
                <p>Preço:</p>
                <span>R${valorAluguel > 0 ? valorAluguel : '0'}</span>
            </div>
            </div>

            <div className='submit-button-alugar'>
            <ButtonSubmit text="Alugar" onClick={novoAluguel}/>
            </div>
        </ContainerModalCliente>
    )
}