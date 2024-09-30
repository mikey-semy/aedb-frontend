import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

// import React, { useState } from 'react';

const apiUrl = env.API_URL;
const apiUsername = env.API_USERNAME;
const apiPassword = env.API_PASSWORD;
console.log('API URL:', apiUrl);
console.log('API Username:', apiUsername);
console.log('API Password:', apiPassword);

interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const Header: React.FC = () => {

    // const [menuItems] = useState<MenuItem[]>([
    //     { id: 1, title: 'Главная', url: '/' },
    //     { id: 2, title: 'Инструкции', url: '/instructions' },
    //   ]);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get<MenuItem[]>(apiUrl + '/api/menu-items', {
          headers: {
            'Authorization': 'Basic ' + btoa(apiUsername + ':' + apiPassword),
          }
        });
        setMenuItems(response.data);
        console.log('Ответ API:', response.data);
      } catch (error) {
        console.error('Ошибка при загрузке меню:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <header className="app-header">
        <h3 className="logo">aedb</h3>
        <nav>
            <ul>
                {menuItems.map((item) => (
                        <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                        </li>
                ))}
            </ul>
        </nav>
    </header>
  );
};

export default Header;