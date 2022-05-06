import * as C from './styles'
import { Navbar } from '../../Components/Navbar'
import { ButtonSubmit } from '../../Components/Form/buttonSubmit'
import { CardCliente } from '../../Components/Cards/CardCliente/index.jsx'
import { CardAlguelAdm } from '../../Components/Cards/CardAluguelAdm'
import { CardCarros } from '../../Components/Cards/CardCarros'


export const AdminPage = () => {
    
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