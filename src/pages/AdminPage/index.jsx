import * as C from './styles'
import { Navbar } from '../../Components/Navbar'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'
import { CardCliente } from '../../Components/Cards/CardCliente/index.jsx'
import { CardAlguelAdm } from '../../Components/Cards/CardAluguelAdm'
import { CardCarros } from '../../Components/Cards/CardCarros'
import Api from '../../services/api'
import { useEffect } from 'react'


export const AdminPage = () => {

    useEffect(()=>{
        // Api.post('carros/cadastro').then(r=>console.log(r)).catch(r=>console.log(r))
        const token = localStorage.getItem('Token')
        if(token){
            console.log(token);
        }else{
            console.log('dromedário')
        }
    }, [])

    return (
        <C.ContainerAdminPage>
            <Navbar />

            
            <div className='header-adm'>
                <h2>Bem-Vindo, ADM</h2>
            </div>
            <div className='all-aluguel'>
                <h2>Todos os aluguéis</h2>
                <div className='card-div'>
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                    <CardAlguelAdm />
                </div>
            </div>
            <div className='all-cars'>
                <h2>Todos os Carros</h2>
                <div className='card-div'>
                    <CardCarros />
                    <CardCarros />
                    <CardCarros />
                    <CardCarros />
                    <CardCarros />
                    <CardCarros />
                    <CardCarros />
                </div>
            </div>
        </C.ContainerAdminPage>
    )
}