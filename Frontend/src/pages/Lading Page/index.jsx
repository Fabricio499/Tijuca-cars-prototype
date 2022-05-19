import './styles.css'
import img from '../../assets/image/logo.svg';
import img1 from '../../assets/image/car1.svg';
import img2 from '../../assets/image/car2.svg';
import img3 from '../../assets/image/car3.svg';



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
                    <ul className='list'>
                        <li>
                            <a href='' className='link'>Faça login</a>
                        </li>
                    </ul>
                </div>
                <div className='items-wrapper'>
                    <div>
                        <img className='img1' src={img1}/>
                    </div>
                    <div>
                        <img className='img2' src={img2} />
                    </div>
                    <div>
                        <img className='img3' src={img3} />
                    </div>
                </div>
            </div>
        
    </div> 
       
    )
}
