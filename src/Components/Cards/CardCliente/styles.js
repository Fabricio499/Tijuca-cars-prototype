import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    height: 240px;
    color: #f6f6f6;
    font-family: roboto;
    background: #0D47A1;
    gap: 0.8rem;
    margin: 1rem 0;

    border-radius: 15px;
    filter: ${props => props.status == 0 ? '' : 'brightness(80%)'} ;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: all ease-in .4s;

    header {
        display: flex;
        justify-content: center;
        gap: 1rem; 
        align-items: center;  
        background: #F9A826;
        border-radius: 15px 15px 0 0px;


        h2 {
            color: #0D47A1;
            padding: 0.4rem;
            font-size: 18px;
        }    
    }
    
    .informacoes {
        height: 100%;
        margin: 0 10%;

        .campo-info {
            margin: 0.5rem 0;
            display: flex;
            justify-content: space-between;


        }

        .status-div {
            margin: 5%;
            text-align: center;
            color: #F9A826;
        }
    }

`