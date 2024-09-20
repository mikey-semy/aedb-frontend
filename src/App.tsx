import React, { useEffect } from 'react';
import favicon from './assets/icons/favicons/favicon.ico';
import './App.css'
import Header from './components/Header';


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
        <h1>Main page</h1>
      </main>
      
    </div>
  );
};

export default App;
