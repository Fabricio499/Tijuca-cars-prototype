import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'

export const FormNovoCarro = () => {

    return (
        <C.FormNovoCarroContainer>
            <div className='form-newCar'>
                <div className='campo-info'>
                    <label>Modelo:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Placa:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Ano:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Cor:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Valor do Aluguel:</label>
                    <input type="text"/>
                </div>
            </div>
            <div className='input-adicionar'>
                <ButtonSubmit text="Adicionar"/>
            </div>
        </C.FormNovoCarroContainer>
    )
}