import React from 'react'
import Search from '../UI/Search';
import Nav from './Nav';    
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
}
`

const Header = () => {
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                padding: 1rem 0;
            `}
        >
            <HeaderContainer>
                <div>
                    <p>P</p>

                    <Search />
                    <Nav />

                <div>
                    <p>Hola: Juan Jose</p>
                    <button type="button">Cerrar Sesión</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
                </div>
            </HeaderContainer>
        </header>
     );
}
 
export default Header;