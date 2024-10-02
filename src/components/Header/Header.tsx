import React from 'react';
import Logo from './Logo';
import NavIcon from './NavIcon';
import NavigationLocal from './NavigationLocal';


const Header: React.FC = () => {
  return (
    <header className="app-header app-header--fixed-top">
        <Logo />
        <NavIcon />
        <NavigationLocal />
    </header>
  );
};

export default Header;