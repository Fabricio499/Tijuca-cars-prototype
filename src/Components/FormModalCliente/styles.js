import styled from 'styled-components'
import { RiCloseLine } from 'react-icons/ri'

export const Conteiner = styled.div`
    background-color: #ffff;
    width:600px;
    height: 600px;
    max-width: 1000px;
    max-height: 1000px;
    padding: 40px 55px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
    border-radius:20px

`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
height: 40px;

color: #1e1e1e;
background-color: transparent;
padding: 0;

font-size: 20px;

button{
    max-height: 40px;
    background: none;
    border:none;
    cursor:pointer;
}
`

export const CloseIcon =styled(RiCloseLine)`
    width: 35px;
    height: 35px;
    color: #F9A826;
    margin-right: 30px;
    margin-top: 30px;

`

export const StyleModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`