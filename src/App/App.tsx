import React from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { SidebarProvider, ThemeProvider, useTheme, ContentDataProvider } from '../contexts';
import { Header, Sidebar, Footer, Content } from '../components';
import { TypographyStyles, GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '../styles';
import { AppContainer, MainContainer } from './App.styles';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <TypographyStyles />
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