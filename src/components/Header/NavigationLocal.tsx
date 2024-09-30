import React, { useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const NavigationLocal: React.FC = () => {

const [menuItems] = useState<MenuItem[]>([
    { id: 1, title: 'Электробезопасность', url: '/es' },
    { id: 2, title: 'Инструкции', url: '/instructions' },
  ]);

  return (
        <nav className='nav'>
            <ul className='nav-items'>
                {menuItems.map((item) => (
                        <li className='nav-item' key={item.id}>
                            <a className='nav-item__link' href={item.url}>{item.title}</a>
                        </li>
                ))}
            </ul>
        </nav>
  );
};

export default NavigationLocal;