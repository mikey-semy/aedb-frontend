import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { ThemeProvider, useTheme } from '@/contexts';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '@/styles';
import App from './App/App.tsx';
import { Login, Dashboard, ESafety, Files, Error } from './pages';
const LoginWithTheme: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <ResetStyles />
      <Variables />
      <Login />
    </StyledThemeProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <ThemeProvider>
        <LoginWithTheme />
      </ThemeProvider>
    ),
    errorElement: <Error />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/esafety",
        element: <ESafety />,
        errorElement: <Error />,
      },
      {
        path: "/files",
        element: <Files />,
        errorElement: <Error />,
      },
    ],
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider 
        router={router} 
        future={{ v7_startTransition: true }}
      />
  </StrictMode>,
);
