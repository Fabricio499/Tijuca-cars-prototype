import * as C from './styles'
import { ButtonSubmit } from '../../Form/buttonSubmit'

export const CardCarros = ({
    idCarro,
    modelo,
    ano,
    cor,
    placa,
    status,
    valor,
    handleRemove
}) => {

    const remove = (e) => {
        handleRemove(idCarro)
    }
    return (
        <C.ContainerCardCarros>
            <header>
                <span className='titulo'>{modelo}</span>
            </header>
            <div className='info-car'>
                <div className='single-infoCar'>
                    <span>Placa:</span>
                    <h2>{placa}</h2>
                </div>
                <div className='single-infoCar'>
                    <span>Cor:</span>
                    <h2>{cor}</h2>
                </div>
                <div className='single-infoCar'>
                    <span>Ano:</span>
                    <h2>{ano}</h2>
                </div>
                <div className='single-infoCar'>
                    <span>Valor Aluguel:</span>
                    <h2>{valor}</h2>
                </div>
                <div className='single-infoCar'>
                    <span>Status:</span>
                    <h2>{status}</h2>
                </div>
                <ButtonSubmit text="Excluir" className='btnExcluir' onClick={remove} />



            </div>
        </C.ContainerCardCarros>
    )
}