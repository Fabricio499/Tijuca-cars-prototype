import React from 'react';
import { Container, LinkStyled } from './styled';
import { Link } from 'react-router-dom';

const SidebarItem = ({ Icon, Text, onClick }) => {

   

    return (
        <LinkStyled> 
                <Container onClick={onClick}>
                    <button>
                    <Icon />
                    {Text}
                    </button>
                </Container>
            
        </LinkStyled>

    )
}

export default SidebarItem;