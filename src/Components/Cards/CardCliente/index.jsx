import * as C from './styles'


export const CardCliente = ({}) => {
    return (
        <C.CardContainer>
            <h2>Modelo</h2>
            <div className='single-info-card'>
                <span>Placa</span><span className='info-span'>ABCD1234</span>
            </div>
            <div className='single-info-card'>
                <span>Data da Reserva</span><span className='info-span'>0000/00/00</span>
            </div>
            <div className='single-info-card'>
                <span>Data da Retirada</span><span className='info-span'>0000/00/00</span>
            </div>
            <div className='single-info-card'>
                <span>Data da Devolução</span><span className='info-span'>0000/00/00</span>
            </div>
        </C.CardContainer>
    )
}