import * as C from './styles'
import { useState } from 'react'

import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import img from '../../assets/image/car.svg';

import { LoginCliente } from '../../controller/reqUser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Login = () => {

    const [view, setView] = useState(false)

    const handleVisiblePassword = () => {
        if (view === false) {
            setView(true)
        } else {
            setView(false)
        }

    }

    const notifyErrSenha = () =>
        toast.error("Campo de senha vazia!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const notifyErrEmail = () =>
        toast.error("Campo de email vazia!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function fazerLogin() {
        if (senha.length == 0) {
            notifyErrSenha()
        }
        if (email.length == 0) {
            notifyErrEmail()
        }
        if (email.length > 0 && senha.length > 0) {
            const response = await LoginCliente(email, senha)
            localStorage.setItem('UserID', response.data.idCliente)
            const token = response.data.token
            localStorage.setItem('Token', token)


            if (response.data.token) {
                window.location.href = '/cliente'
                return true
            }
        }

    }



    return (
        <C.ContainerLogin>
            <div className='right'>
                <div className='content-right'>
                    <img className='img-car' src={img} />
                    <h2>Tijuca Cars</h2>
                </div>
            </div>
            <div className='left'>
                <div className='form-left'>
                    <h2>LOGIN</h2>
                    <div className='input-div'>
                        <label>Email</label>
                        <input
                            type="email"
                            className='input-login'
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <label>Senha</label>
                        <input
                            type={view === false ? 'password' : 'text'}
                            className='input-login'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <div onClick={handleVisiblePassword} className="iconView">
                            {
                                view
                                    ?
                                    <AiOutlineEye />
                                    :
                                    <AiOutlineEyeInvisible />
                            }
                        </div>

                    </div>
                </div>
                <button className='btn-enviar' onClick={() => fazerLogin()}>LOGAR</button>
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
        </C.ContainerLogin>
    )
}