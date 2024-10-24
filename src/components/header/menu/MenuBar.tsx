import React, { useState } from 'react';
import MenuItemComponent from './MenuItemComponent';
import { MenuItem } from '../../../types';

interface MenuBarProps {
    items: MenuItem[];
};

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
      };

    return (
        <>
            <button 
                className="menu-toggle" 
                onClick={toggleMobileMenu}>
                ☰
            </button>
            
            <div className={`menu-bar ${isMobileMenuOpen ? 'menu-bar--open' : ''}`}>
                {items.map((item, index) => (
                    <MenuItemComponent key={index} item={item} />
                ))}
            </div>
        </>
    );
};

export default MenuBar;