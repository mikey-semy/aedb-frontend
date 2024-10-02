import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';

interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const NavigationRemote: React.FC = () => {

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
   const fetchMenuItems = async () => {
     try {
       const response = await api.get<MenuItem[]>('/api/menu-items');
       setMenuItems(response.data);
       console.log('Ответ API:', response.data);
     } catch (error) {
       console.error('Ошибка при загрузке меню:', error);
     }
   };

   fetchMenuItems();
  }, []);

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

export default NavigationRemote;