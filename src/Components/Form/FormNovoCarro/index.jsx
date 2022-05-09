import { useState } from 'react'
import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'
import Api from '../../../services/api'

export const FormNovoCarro = () => {

    const [modelo, setModelo] = useState('')
    const [placa, setPlaca] = useState('')
    const [ano, setAno] = useState('')
    const [cor, setCor] = useState('')
    const [valor, setValor] = useState('')
    var status = 0;

    async function handleNewCar(modelo, placa, ano, cor, valor, status) {
        const response = await Api.post('/carros/cadastro', {
            modelo: modelo,
            placa: placa,
            ano: ano,
            cor: cor,
            valorDiaAluguel: valor,
            status: status,
        })
        alert('Carro adcionado com sucesso!')
    }


    return (
        <C.FormNovoCarroContainer>
            <div className='form-newCar'>
                <div className='campo-info'>
                    <label>Modelo:</label>
                    <input type="text" value={modelo} onChange={e=>setModelo(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Placa:</label>
                    <input type="text" value={placa} onChange={e=>setPlaca(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Ano:</label>
                    <input type="text" value={ano} onChange={e=>setAno(e.target.value)}/>
                </div>
                <div className='campo-info'>
                    <label>Cor:</label>
                    <input type="text" value={cor} onChange={e=>setCor(e.target.value)}/>
                </div>
                <div className='campo-info'>
                    <label>Valor do Aluguel:</label>
                    <input type="text" value={valor} onChange={e=>setValor(e.target.value)}/>
                </div>
            </div>
            <div className='input-adicionar'>
                <ButtonSubmit text="Adicionar" onClick={()=>handleNewCar(modelo, placa, ano, cor, valor, status)}/>
            </div>
        </C.FormNovoCarroContainer>
    )
}