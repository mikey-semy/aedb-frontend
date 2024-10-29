import React from 'react';
// import { Outlet } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from '../contexts';
import { Header, Menu } from '../components';
import { GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '../styles';
import { AppContainer } from './App.styles';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <ResetStyles />
      <GlobalStyles />
      <Variables />
      <AppContainer>
        <Header />
        <Menu />
        {/* <Outlet /> */}
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