import React from 'react';
import Logo from './Logo';
import NavigationLocal from './NavigationLocal';


const Header: React.FC = () => {
  return (
    <header className="app-header">
        <Logo />
        <NavigationLocal />
    </header>
  );
};

export default Header;