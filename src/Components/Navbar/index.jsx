import React, {useState} from 'react';
import {Container} from './styled';
import {FaBars} from 'react-icons/fa';
import Sidebar from '../Sidebar';

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Container>
            <FaBars onClick={showSidebar}/>
            {sidebar && <Sidebar active={setSidebar}/>}
            <h1>Tijuca Cars</h1>
        </Container>

    )
}

