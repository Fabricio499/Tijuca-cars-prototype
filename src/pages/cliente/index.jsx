import React from 'react'
import * as C from './styles'
import {Navbar} from '../../Components/navbar'
import { CardCliente } from '../../Components/CardCliente'
import { ButtonSubmit } from '../../Components/buttonSubmit'


export const Cliente = () => {
    return (
        <C.ContainerCliente>
            <Navbar />
            <div className='content-cliente'>
                <div className='content-info'>
                    <span>Meus Aluguéis</span>
                    <ButtonSubmit  text="Inserir Aluguel"/> 
                </div>
                <div className='cards'>
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                    <CardCliente />
                </div>
            </div>
        </C.ContainerCliente>
    )
}