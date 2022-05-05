import styled from 'styled-components'

export const ContainerCardCarros = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 240px;
    color: #f6f6f6;
    font-family: roboto;
    background: #0D47A1;

    border-radius: 15px;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: all ease-in .4s;

    header {
        padding: 1rem;
        text-align: center;
    }
    .info-car {
        
        .single-infoCar {
            margin: 0 1rem;
            justify-content: space-between;
            display: flex;
            margin-bottom: 1rem;
        }
    }
`