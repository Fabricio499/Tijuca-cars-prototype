import * as C from './styles'

export const NoContent = () => {
    return (
            <C.NoContentContainer>
                <div className='info'>
                    <h2>
                        Não foi encontrado nenhum aluguel em seu perfil
                    </h2>
                </div>
                <div className='intrucoes'>
                    <p>
                        Encontre e consulte os melhores automóveis e faça seu novo aluguél na Tijuca Cars
                    </p>
                    <hr />
                    <p>
                        Consulte regras e informações necessárias e faça seu aluguél agora mesmo
                    </p>
                    <hr />
                </div>
            </C.NoContentContainer> 
    )
}