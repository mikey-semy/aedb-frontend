import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  Reset,
  Variables,
  Global,
  lightTheme,
  darkTheme,
  ThemeProvider, useTheme

} from '../assets/styles';
import { AppContainer } from './App.styles';

import Menu from '../components/Menu';

// import { Outlet } from "react-router-dom";
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Reset />
      <Variables />
      <Global />
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
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
export default App;