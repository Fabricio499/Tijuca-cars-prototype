import React, {useState} from 'react';
import {Container} from './styled';
import {FaBars} from 'react-icons/fa';
import SidebarInfo from '../SidebarInfo';


export const NavbarInfo = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(true)
    return (
        <Container>
            <FaBars onClick={showSidebar}/>
            {sidebar && <SidebarInfo active={setSidebar}/>}
            <h1>Tijuca Cars</h1>
        </Container>

    )
}