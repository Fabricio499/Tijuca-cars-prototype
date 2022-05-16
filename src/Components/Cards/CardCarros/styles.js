import styled from 'styled-components'

export const ContainerCardCarros = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 280px;
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
            justify-content: space-between;
            display: flex;
            margin-left: 30px;
            margin-right: 30px;
            margin-bottom: 4px;
        }
    }

    .titulo{
        font-size: 24px;
        color: #F9A826;
    }

    h2{
        color: #F9A826;
        font-size: 15px
    }

    .btnExcluir{
        flex: 1;
        height: 2rem;
        margin: 1.5rem auto;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

`