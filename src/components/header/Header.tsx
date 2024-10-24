import React from 'react';
import Logo from './Logo';
import MenuBar from './menu/MenuBar';
import { menuItems } from '../../data/menu';
const Header: React.FC = () => {

  return (
    <header className="app-header">
        <Logo />
        <MenuBar items={menuItems} />
    </header>
  );
};

export default Header;