import './styles.css'
import img from '../../assets/image/logo.svg';


export const LadingPage = () => {

    return (
    <div>
        <div className='fundo-branco'>
            <div className='box-cabecalho'>
                <div className='div-menor'>
                    <img className='img-logo' src={img}/>
                    <p className='titulo-logo'> Tijuca Cars</p>
                </div>
            </div>
            <div className='box-meio'>
                <div className='div-menor-meio'>
                    <div className='paragrafo-2'>
                        <div>
                            <p className='ponto-2'></p>
                        </div>
                        <h3 className='letra'>Venha conhecer a Empresa que mais cresce no segmento automobilístico</h3>
                    </div>
                    <br/>
                    <div className='paragrafo-2'>
                        <p className='ponto-2'></p>
                        <h3 className='letra'>Preços atrativos e competitivos</h3>
                    </div>
                </div>
            </div>
        </div>
      <div className='fundo'>
        <div className='login'>
            <button className='btn-logo'> Faça login </button>
            <p className='login-branco'>----------</p>
        </div>
      </div>
    </div> 
       
    )
}
