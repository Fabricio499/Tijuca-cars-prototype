import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'
import {useState} from 'react'
import Api from '../../../services/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const FormNovoCliente = () => {
    
    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cnh, setCnh] = useState('')
    const [telefone, setTelefone] = useState('')
    var status = 0;

    const notifySucc = () => toast.success('Novo usuário inserido!', {
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

    async function handleNewUser(nome, dataNascimento, email, senha, telefone, cnh, status) {
        if(nome.length > 0 && dataNascimento.length > 0 && email.length > 0 && senha.length > 0 && telefone.length > 0 && cnh.length > 0) {
            const response = await Api.post('clientes/cadastro', {
                nome: nome,
                dataNascimento: dataNascimento,
                email: email,
                senha: senha,
                telefone:telefone,
                cnh: cnh,
                status: status,
    
            })
            notifySucc();
        } else {
            notifyErr();
        }
}
    
    return (
        <C.FormNovoClienteContainer>
            <div className='form-newcliente'>
                <div className='campo-info'>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={e=>setNome(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Data de Nascimento:</label>
                    <input type="date" value={dataNascimento} onChange={e=>setDataNascimento(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>CNH:</label>
                    <input type="text" value={cnh} onChange={e=>setCnh(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Telefone:</label>
                    <input type="text" value={telefone} onChange={e=>setTelefone(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>E-Mail:</label>
                    <input type="text" value={ email} onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={e=>setSenha(e.target.value)} />
                </div>
            </div>
            <div className='input-submit'>
                <ButtonSubmit text="Cadastrar" onClick={()=>handleNewUser(nome, dataNascimento, email, senha, telefone, cnh, status) } />
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
        </C.FormNovoClienteContainer>
    )
}