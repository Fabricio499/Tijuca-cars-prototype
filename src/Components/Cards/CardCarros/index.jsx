import * as C from './styles'

import Api from '../../../services/api'
import { useState, useEffect } from 'react'

export const CardCarros = ({modelo, ano, cor, placa, status, valor}) => {

   
    
    
    return (
        <C.ContainerCardCarros>
            <header>
                <span>{modelo}</span>
            </header>
            <div className='info-car'>
                <div className='single-infoCar'>
                    <span>Placa:</span>
                    <p>{modelo}</p>
                </div>
                <div className='single-infoCar'>
                    <span>Cor:</span>
                    <p>{cor}</p>
                </div>
                <div className='single-infoCar'>
                    <span>Ano:</span>
                    <p>{ano}</p>
                </div>
                <div className='single-infoCar'>
                    <span>Status:</span>
                    <p>{status}</p>
                </div>
            </div>
        </C.ContainerCardCarros>
    )
}