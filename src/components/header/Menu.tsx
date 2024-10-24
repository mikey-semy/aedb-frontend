import React, { useState } from 'react';
import { menuItems } from '../../data/menu';
import { Link } from 'react-router-dom';
const Menu: React.FC = () => {
    const [items] = useState(menuItems);
    return (
        <>
            <nav className='nav'>
                <ul className='nav__items'>
                    {items.map((item, index) => (
                        <li className='nav__item' key={index}>
                            <Link 
                                className='nav__item--link' 
                                to={`${typeof item.path == 'string' ? item.path : '#'}`}
                            >
                                <span className='nav__item--icon'>{item.icon}</span>
                                <span className='nav__item--title'>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Menu;
