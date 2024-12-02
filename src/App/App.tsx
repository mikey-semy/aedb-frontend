import React from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { SidebarProvider, ThemeProvider, useTheme, ContentDataProvider } from '@/contexts';
import { Header, Sidebar, Footer, Content } from '@/components';
import { GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '@/styles';
import { AppContainer, MainContainer } from './App.styles';
import { Login } from '@/pages';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  const token = localStorage.getItem('token');
    
  if (!token) {
    return <Login />;
  }

  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <ResetStyles />
      <Variables />
      <AppContainer>
        <Sidebar />
        <MainContainer>
          <Header /> 
          <ContentDataProvider>     
            <Content>
              <Outlet />
            </Content>
          </ContentDataProvider>
          <Footer />
        </MainContainer>
      </AppContainer>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </ThemeProvider>
  );
};
export default App;