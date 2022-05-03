import React from "react"
import {ContainerModalCliente} from './styled'
import { ButtonSubmit } from "../buttonSubmit"

export const FormCliente = () => {
    return(
        <ContainerModalCliente>
            <div className='form-model-cliente'>
            <div className='campo-input'>   
                <label>Modelo do Veículo</label>
                <input type="text"/>
            </div>

            <div className='campo-input'>
                <label>Data Retirada</label>
                <input type="date"/>
            </div>
            <div className='campo-input'> 
                <label>Data Entrega</label>
                <input type="date"/>
            </div>
            <div className='price-div'>
                <p>Preço:</p>
                <span>R$00.000</span>
            </div>
            </div>

            <div className='submit-button-alugar'>
            <ButtonSubmit text="Alugar" />
            </div>
        </ContainerModalCliente>
    )
}

