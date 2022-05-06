import * as C from './styles'

export const CardCarros = () => {

    return (
        <C.ContainerCardCarros>
            <header>
                <span>Modelo</span>
            </header>
            <div className='info-car'>
                <div className='single-infoCar'>
                    <span>Placa:</span>
                    <p>NOME</p>
                </div>
                <div className='single-infoCar'>
                    <span>Cor:</span>
                    <p>NOME</p>
                </div>
                <div className='single-infoCar'>
                    <span>Ano:</span>
                    <p>NOME</p>
                </div>
                <div className='single-infoCar'>
                    <span>Status:</span>
                    <p>Disponivel</p>
                </div>
            </div>
        </C.ContainerCardCarros>
    )
}