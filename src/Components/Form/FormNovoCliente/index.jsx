import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'

export const FormNovoCliente = () => {
    
    
    return (
        <C.FormNovoClienteContainer>
            <div className='form-newcliente'>
                <div className='campo-info'>
                    <label>Nome:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Data de Nascimento:</label>
                    <input type="date"/>
                </div>
                <div className='campo-info'>
                    <label>CNH:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Telefone:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>E-Mail:</label>
                    <input type="text"/>
                </div>
                <div className='campo-info'>
                    <label>Senha:</label>
                    <input type="password"/>
                </div>
            </div>
            <div className='input-submit'>
                <ButtonSubmit text="Cadastrar"/>
            </div>
        </C.FormNovoClienteContainer>
    )
}