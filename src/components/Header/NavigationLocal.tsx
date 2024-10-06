import React, { useState } from 'react';

interface MenuItem {
  id: number;
  icon: string;
  title: string;
  url: string;
}

const NavigationLocal: React.FC = () => {

const [menuItems] = useState<MenuItem[]>([
    { id: 1, icon: '⚡️', title: 'Электробезопасность', url: '/es' },
    { id: 2, icon: '📄', title: ' Инструкции', url: '/manuals' },
  ]);

  return (
        <nav className='nav'>
            <ul className='nav__items'>
                {menuItems.map((item) => (
                        <li className='nav__item' key={item.id}>
                            <a className='nav__item--link' href={item.url}>
                                <span className='nav__item--icon'>{item.icon}</span>
                                <span className='nav__item--title'>{item.title}</span>
                            </a>
                        </li>
                ))}
            </ul>
        </nav>
  );
};

export default NavigationLocal;