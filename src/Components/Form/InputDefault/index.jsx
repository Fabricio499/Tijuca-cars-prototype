import * as C from './styles'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export const InputDefault = ({type, className, onChange}) => {


    return (
        <C.ContainerInput>
            <input type={type} className={className} />
            <div className='icon-eye'>
            </div>
        </C.ContainerInput>
    )
}