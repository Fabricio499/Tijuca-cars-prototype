import React from "react"
import { useState, useEffect } from 'react'

import { ContainerModalCliente } from './styled'
import { ButtonSubmit } from "../buttonSubmit"

import Api from '../../../services/api'

export const FormCliente = () => {

    const [cars, setCars] = useState([])
    const [idCarro, setIdCarro] = useState('')
    const [qtdeDiasAlugados, setQtdeDiasAlugados] = useState(0)
    const [dataRetirada, setDataRetirada] = useState('')
    const [dataEntrega, setDataEntrega] = useState('')
    const [valorAluguel, setValorAluguel] = useState(0)
    const [dataReserva, setDataReserva] = useState('')
    const [infoCar, setInfoCar] = useState(undefined)

    const statusCliente = 0;
    const statusAluguel = 0;
    const [idCliente, setIdCliente] = useState(undefined)

    useEffect(() => {
        const buscarId = localStorage.getItem('UserID')
        setIdCliente(buscarId)
    }, [])


    useEffect(() => {
        async function dataCar() {
            const response = await Api.get('carros/carrosDisponiveis')
            setCars(response.data.response)
        }
        dataCar();
    }, [])

    const teste = "avas";

    useEffect(() => {
        dataDaReserva();
        async function getSingleCar() {
            const responseInfo = await Api.get(`carros/${idCarro}`)
            setInfoCar(responseInfo.data.response[0])
            setValorAluguel(infoCar.valorDiaAluguel * qtdeDiasAlugados)
        }
        getSingleCar()
    }, [idCarro, qtdeDiasAlugados])


    function dataDaReserva() {
        const PegarData = new Date();
        const diaa = String(PegarData.getDate()).padStart(2, '0');
        const dia = parseInt(diaa)
        const mes = String(PegarData.getMonth() + 1).padStart(2, '0');
        const ano = PegarData.getFullYear();
        setDataReserva(dia + '-' + mes + '-' + ano);
        setDataEntrega(dia + 2 + '-' + mes + '-' + ano)
        console.log(dataReserva)
        console.log(dataEntrega)
    }


    async function novoAluguel(
        idCarro,
        idCliente,
        dataReserva,
        dataRetirada,
        dataEntrega,
        qtdeDiasAlugados,
        statusAluguel
    ) {
        if (valorAluguel > 0) {
            const response = await Api.post('alugueis/novoAluguel', {
                idCarro: idCarro,
                idCliente: idCliente,
                dataReserva: dataReserva,
                dataRetirada: dataRetirada,
                dataEntrega: dataEntrega,
                qtdeDiasAlugados: qtdeDiasAlugados,
                statusAluguel: statusAluguel
            }).then(r=>console.log(r))
            
        }
    }

    return (
        <ContainerModalCliente>
            <div className='form-model-cliente'>
                <div className='campo-input'>
                    <label>Modelo do Veículo</label>
                    <select onChange={e => setIdCarro(e.target.value)}>
                        <option value="" selected>
                            selecione um modelo
                        </option>
                        {cars.length > 0 &&
                            cars.map((cars) => (
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
                        onChange={e => setDataRetirada(e.target.value)}
                    />
                </div>
                <div className='campo-input'>
                    <label>Quantidade de Dias</label>
                    <input
                        type="number"
                        value={qtdeDiasAlugados}
                        min="1"
                        max="30"
                        onChange={e => setQtdeDiasAlugados(e.target.value)}
                        onKeyDown={(e) => e.preventDefault()}
                    />
                </div>
                <div className='price-div'>
                    <p>Preço:</p>
                    <span>R${valorAluguel > 0 ? valorAluguel : '0'}</span>
                </div>
            </div>

            <div className='submit-button-alugar'>
                <ButtonSubmit text="Alugar" onClick={() => novoAluguel
                    (
                        idCarro,
                        idCliente,
                        dataReserva,
                        dataRetirada,
                        dataEntrega,
                        qtdeDiasAlugados,
                        statusAluguel
                    )} 
                    />
            </div>
        </ContainerModalCliente>
    )
}