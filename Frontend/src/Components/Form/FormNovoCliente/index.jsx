import { ButtonSubmit } from '../buttonSubmit'
import * as C from './styles'
import { useState, useEffect } from 'react'
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
    const [admin, setAdmin] = useState(0)
    const [status, setStatus] = useState(0)

    useEffect(() => {
        setStatus(0)
    }, [])

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

    function changeAdmin() {
        if (admin === 0) {
            setAdmin(1)
        } else {
            setAdmin(0)
        }
    }

    async function handleNewUser(nome, dataNascimento, email, senha, telefone, cnh, admin, status) {
        try {
            if (nome.length > 0 && dataNascimento.length > 0 && email.length > 0 && senha.length > 0 && telefone.length > 0 && telefone.length <= 9 && cnh.length > 0) {
                const response = await Api.post('clientes/cadastro', {
                    nome: nome,
                    dataNascimento: dataNascimento,
                    email: email,
                    senha: senha,
                    telefone: telefone,
                    cnh: cnh,
                    admin: admin,
                    status: status

                })
                notifySucc();
            } else {
                notifyErr();
            }
        } catch (error) {
            const notifyErr2 = () => toast.error(error.response.data.mensagem, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            notifyErr2()
        }

    }

    //função que permite digitar apenas numeros
    function onlynumber(e) {
        var theEvent = e || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    return (
        <C.FormNovoClienteContainer>
            <div className='form-newcliente'>
                <div className='campo-info'>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Data de Nascimento:</label>
                    <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>CNH:</label>
                    <input type="text" value={cnh} onKeyPress={onlynumber} onChange={e => setCnh(e.target.value)} maxLength='11' />
                </div>
                <div className='campo-info'>
                    <label>Telefone:</label>
                    <input type="text" value={telefone} onKeyPress={onlynumber} onChange={e => setTelefone(e.target.value) } maxLength='9'  />
                </div>
                <div className='campo-info'>
                    <label>E-Mail:</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>
                <div className='campo-info'>
                    <label>Admin</label>
                    <input type="checkbox" value={admin} onClick={changeAdmin} />
                </div>
            </div>
            <div className='input-submit'>
                <ButtonSubmit text="Cadastrar" onClick={() => handleNewUser(nome, dataNascimento, email, senha, telefone, cnh, admin, status)} />
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