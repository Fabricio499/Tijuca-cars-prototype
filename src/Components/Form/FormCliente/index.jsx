import React from "react"
import { useState, useEffect } from 'react'

import { ContainerModalCliente } from './styled'
import { ButtonSubmit } from "../buttonSubmit"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import moment from "moment"

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

    const notifySucc = () => toast.success('Você tem um novo Aluguel!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    const notifyErr = () => toast.error('Você não pode executar essa operação!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
        const dataMomentoReserva = moment().format('YYYY-MM-DD') 
        setDataReserva(dataMomentoReserva)
        onCalcularData(dataReserva, qtdeDiasAlugados)
        
        // console.log(dataReserva)
    }
    function onCalcularData(data, dias){
        const dataDaEntrega = moment().add(dias, 'days')
        const newDataEntrega = dataDaEntrega.format('YYYY-MM-DD')
        setDataEntrega(newDataEntrega)
        // console.log(qtdeDiasAlugados)
        console.log(dataEntrega)
    }

    async function novoAluguel(
        idCarro,
        idCliente,
        dataReserva,
        dataRetirada,
        dataEntrega,
        qtdeDiasAlugados,
        valorAluguel,
        statusAluguel
    ) {
        try {
            if (valorAluguel > 0) {
                const response = await Api.post('alugueis/novoAluguel', {
                    idCarro: idCarro,
                    idCliente: idCliente,
                    dataReserva: dataReserva,
                    dataRetirada: dataRetirada,
                    dataEntrega: dataEntrega,
                    qtdeDiasAlugados: qtdeDiasAlugados,
                    valorAluguel: valorAluguel,
                    statusAluguel: statusAluguel
                })
                notifySucc()
                
            }
        } catch (error) {
            console.log(error.response.data.mensagem)
            notifyErr()
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
                        valorAluguel,
                        statusAluguel
                    )} 
                    />
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
        </ContainerModalCliente>
    )
}