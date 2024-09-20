import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const Header: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get<MenuItem[]>('/api/menu-items');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке меню:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <header className="app-header">
        <h3 className="logo">aedb</h3>
        {/* <nav>
            <ul>
                {menuItems.map((item) => (
                <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                </li>
                ))}
            </ul>
        </nav> */}
    </header>
  );
};

export default Header;