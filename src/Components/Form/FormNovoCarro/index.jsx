import { useState } from 'react'
import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'
import Api from '../../../services/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const FormNovoCarro = ({ closeModalCarro }) => {

    const [error, setError] = useState(false)

    const notifySucc = () => toast.success('Carro adicionado com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    const notifyErr = () => toast.error('Insira corretamente os campos!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const [modelo, setModelo] = useState('')
    const [placa, setPlaca] = useState('')
    const [ano, setAno] = useState('')
    const [cor, setCor] = useState('')
    const [valor, setValor] = useState('')
    var status = 0;

    async function handleNewCar(modelo, placa, ano, cor, valor, status) {
        if (modelo.length > 0 && placa.length > 0 && ano.length > 0 && cor.length > 0 && valor.length > 0) {
            const response = await Api.post('/carros/cadastro', {
                modelo: modelo,
                placa: placa,
                ano: ano,
                cor: cor,
                valorDiaAluguel: valor,
                status: status,
            })
            notifySucc()
        } else {
            notifyErr()
        }
}





        return (
            <C.FormNovoCarroContainer>
                <div className='form-newCar'>
                    <div className='campo-info'>
                        <label>Modelo:</label>
                        <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} />
                    </div>
                    <div className='campo-info'>
                        <label>Placa:</label>
                        <input type="text" value={placa} onChange={e => setPlaca(e.target.value)} />
                    </div>
                    <div className='campo-info'>
                        <label>Ano:</label>
                        <input type="text" value={ano} onChange={e => setAno(e.target.value)} />
                    </div>
                    <div className='campo-info'>
                        <label>Cor:</label>
                        <input type="text" value={cor} onChange={e => setCor(e.target.value)} />
                    </div>
                    <div className='campo-info'>
                        <label>Valor do Aluguel:</label>
                        <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
                    </div>
                </div>
                <div className='input-adicionar'>
                    <ButtonSubmit text="Adicionar" onClick={() => handleNewCar(modelo, placa, ano, cor, valor, status)} />
                </div>
                <div>
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
                </div>
            </C.FormNovoCarroContainer>
        )
    }