import * as C from './styles'
import {useState} from 'react'

import {AiOutlineEye} from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import img from '../../assets/image/car.svg';

export const Login = () => {

    const [view, setView] = useState(false)

    const handleVisiblePassword = () => {
        if(view === false) {
            setView(true)
        } else {
            setView(false)
        }

    }

    const handleLogin = () => {
        window.location.href="/cliente"
    }

    return (
        <C.ContainerLogin>
            <div className='right'>
                <div className='content-right'>
                    <img className='img-car' src={img}/>
                    <h2>Tijuca Cars</h2>
                </div>
            </div>
            <div className='left'>
                <div className='form-left'>
                    <h2>LOGIN</h2>
                    <div className='input-div'>
                        <label>Email</label>
                        <input type="email" className='input-login' name="" />
                        <label>Senha</label>
                        <input type={view === false ? 'password' : 'text'} className='input-login' name="" id="" />
                        <div onClick={handleVisiblePassword}  className="iconView">
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
                    <button className='btn-enviar' onClick={handleLogin}>LOGAR</button>
            </div>
        </C.ContainerLogin>
    )
}