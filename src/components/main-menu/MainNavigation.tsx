import React, { useState } from 'react';
import { menuItems } from '../../data';
import { Link } from 'react-router-dom';
const MainNavigation: React.FC = () => {
    const [items] = useState(menuItems);
    return (
        <>
            <nav className='main-nav'>
                <ul className='main-nav__items'>
                    {items.map((item, index) => (
                        <li className='main-nav__item' key={index}>
                            <Link 
                                className='main-nav__link' 
                                to={`${typeof item.path == 'string' ? item.path : '#'}`}
                            >
                                <span className='main-nav__icon'>{item.icon}</span>
                                <span className='main-nav__lable'>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default MainNavigation;