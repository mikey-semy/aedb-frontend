import React from 'react';
import { GlobalStyles } from './assets/styles/GlobalStyles.styles';
import { AppContainer } from './App.styles';
import Menu from './components/Menu/Menu';

// import { Outlet } from "react-router-dom";
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Menu />
        {/* <Header />
        <main className="app-main"> 
          <div className='container'>
            <Outlet />
          </div>
        </main>
        <Footer /> */}
      </AppContainer>
    </>
  );
};

export default App;