import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
export { ThemeProvider, useTheme } from '../contexts';
import {
  ResetStyles,
  Variables,
  GlobalStyles,
  LightTheme,
  DarkTheme,
} from '../styles';
import { AppContainer } from './App.styles';
import Header from '../components/Header';
import Menu from '../components/Menu';

// import { Outlet } from "react-router-dom";

// import Footer from './components/footer/Footer';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <ResetStyles />
      <Variables />
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Menu />

        {/* 
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