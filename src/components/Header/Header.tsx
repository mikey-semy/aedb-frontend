import React from 'react';
import Logo from './Logo';
import NavIcon from './NavIcon';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header className="app-header app-header--fixed-top">
        <Logo />
        <NavIcon />
        <Menu />
    </header>
  );
};

export default Header;