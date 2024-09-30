import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";

import favicon from '../assets/icons/favicons/favicon.ico';

import Header from '../components/Header/Header';


const App: React.FC = () => {
  useEffect(() => {
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="app-main"> 
        <Outlet />
      </main>    
    </div>
  );
};

export default App;
