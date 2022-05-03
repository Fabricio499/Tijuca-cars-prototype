import React from 'react'
import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'

export const Navbar = () => {
    return (
        <C.Navbar>
            <div className='content-nav'>
                <h2>Tijuca Cars</h2>
                <ButtonSubmit  text="sair"/>
            </div>
        </C.Navbar>
    )
}