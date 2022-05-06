import * as C from './styles'
import { useState } from 'react'

import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import img from '../../assets/image/car.svg';

import { LoginCliente } from '../../controller/reqUser'

export const Login = () => {

    const [view, setView] = useState(false)

    const handleVisiblePassword = () => {
        if (view === false) {
            setView(true)
        } else {
            setView(false)
        }

    }

    // const handleLogin = async () => {
    //     const response = await LoginCliente(email, senha)
    //     console.log(response)
    // }

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function teste(){
        const response = await LoginCliente(email, senha)
        console.log(response.data)
        const token = response.data.token
        const adm = response.data.adm
        localStorage.setItem('Token', token)
        
        if(response.data.token) {
            return true
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
                            onChange={e=>setSenha(e.target.value)}
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
                <button className='btn-enviar' onClick={()=>teste()}>LOGAR</button>
            </div>
        </C.ContainerLogin>
    )
}