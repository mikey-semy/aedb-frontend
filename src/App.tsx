import React from 'react';
import Menu from './components/Menu/Menu';
// import { Outlet } from "react-router-dom";
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Menu />
      {/* <Header />
      <main className="app-main"> 
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer /> */}
    </div>
  );
};

export default App;