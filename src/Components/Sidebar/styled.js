import styled from 'styled-components'

export const Container = styled.div`
    background-color:#0D47A1;
    position:fixed;
    height: 100%;
    top:0px;
    left:0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    > svg{
        position:fixed;
        color: #F9A826;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from{
            opacity: 0;
            width: 0;
        }

        to{
            opacity: 1;
            width: 300px;
        }
    }

    .btn-modal {
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    background-color:#F9A826;
    font: 20px;
    color: white;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    transition: all ease 0.3s;

    > svg {
        margin: 0 20px;
    }

    &:hover{
        transition: all ease 0.3s;
        background-color: #F9A826;
        color: #000;
    }

  
    }

`;

export const Content =styled.div`
    margin-top: 100px;
`