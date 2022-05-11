import styled from 'styled-components'

export const ContainerCliente = styled.div`
   
   font-family: Poppins;
   color: #f6f6f6;

    .content-cliente {
        width: 80%;
        margin:auto;

        h1 {
            font-size: 18pt;
            font-weight: 500;
            margin: 2rem 0;
        }
        
    }
    
    .cards {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 26px;

    }
    .content-info {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

        span {
            color: #f6f6f6;
            font-size: 2.5rem;
            font-family: 'Roboto', sans-serif;
        }
    }
   
       
    

   
`