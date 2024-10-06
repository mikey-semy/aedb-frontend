import React, { useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const NavigationLocal: React.FC = () => {

const [menuItems] = useState<MenuItem[]>([
    { id: 1, title: '⚡️', url: '/es' },
    { id: 2, title: '📄', url: '/manuals' },
  ]);

  return (
        <nav className='nav'>
            <ul className='nav__items'>
                {menuItems.map((item) => (
                        <li className='nav__item' key={item.id}>
                            <a className='nav__item--link' href={item.url}>{item.title}</a>
                        </li>
                ))}
            </ul>
        </nav>
  );
};

export default NavigationLocal;