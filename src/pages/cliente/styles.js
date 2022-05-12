import styled from 'styled-components'

export const ContainerCliente = styled.div`
   
   font-family: 'Roboto', sans-serif;
   color: #f6f6f6;

    .content-cliente {
        width: 80%;
        margin:auto;

        > h2 {
            margin: 2rem 0;
            font-weight: 400;
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