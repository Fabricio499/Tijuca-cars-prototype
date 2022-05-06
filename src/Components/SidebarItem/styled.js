import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color:#F9A826;
    font: 20px;
    color: white;
    padding: 10px;
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

  
`;

export const LinkStyled = styled.div` 
      .linkSidebar{
        text-decoration: none;
        color:white
    }

`;