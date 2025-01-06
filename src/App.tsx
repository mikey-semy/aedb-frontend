import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
    AuthProvider,
    SidebarProvider,
    ThemeProvider,
    useTheme,
    ContentDataProvider,
    PlayerProvider,
    ToastProvider
} from '@/contexts';
import { Header, Sidebar, Footer, Content } from '@/components';
import { GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '@/styles';
import { AppContainer, MainContainer } from './App.styles';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Перенаправляем на страницу входа, если токен отсутствует
    }
  }, [token, navigate]);

  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <ResetStyles />
      <Variables />
      <AppContainer>
        {token ? (
          <>
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
          </>
        ) : (
          <Outlet />
        )}
      </AppContainer>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
        <PlayerProvider>
            <ThemeProvider>
                <ToastProvider>
                    <ContentDataProvider>
                        <SidebarProvider>
                            <AppContent />
                        </SidebarProvider>
                    </ContentDataProvider>
                </ToastProvider>
            </ThemeProvider>
        </PlayerProvider>
    </AuthProvider>
  );
};
export default App;