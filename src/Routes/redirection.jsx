import React from 'react'
import { AdminPage } from '../pages/AdminPage'
import { Cliente } from '../pages/cliente'
import Api from '../services/api'

export const redirection = () => {

    async function verificaAdm() {
        const adm = localStorage.getItem('UserID')
        const responseAdm = await Api.get(`clientes/${adm}`)
        console.log(responseAdm.data.response[0].adm)
        if (responseAdm.data.response[0].adm === 1) {
            return true
        } else {
            return false
        }
    }

    
    const result = verificaAdm()
    console.log(result)
    if (result === true) {
        return <AdminPage />
    } else {
        return <Cliente />
    }
}