import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, MenuSelected } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface Params {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation<Params>();

  return (
    <>
      <Container size={size}>
        <header>
          <img src={Logo} alt="GoFinances" />
          <nav>
            <MenuSelected to="/" locationofthepage={pathname}>
              Listagem
            </MenuSelected>
            <MenuSelected to="/import" locationofthepage={pathname}>
              Importar
            </MenuSelected>
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
