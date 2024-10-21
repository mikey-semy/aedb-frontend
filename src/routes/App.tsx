import React, { useEffect } from 'react';

import { Outlet } from "react-router-dom";

import favicon from '../public/favicon.ico';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



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
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
