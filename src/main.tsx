import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { AuthProvider, ThemeProvider, useTheme } from '@/contexts';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '@/styles';
import App from './App.tsx';
import { Login, ResetPassword, Dashboard, ESafety, Files, Settings, Devices, Error } from './pages';

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

const ResetPasswordWithTheme: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <ResetStyles />
      <Variables />
      <ResetPassword />
    </StyledThemeProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthProvider>
        <ThemeProvider>
          <LoginWithTheme />
        </ThemeProvider>
      </AuthProvider>
    ),
    errorElement: <Error />
  },
  {
    path: "/reset-password",
    element: (
      <AuthProvider>
        <ThemeProvider>
          <ResetPasswordWithTheme />
        </ThemeProvider>
      </AuthProvider>
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
        {
            path: "/settings",
            element: <Settings />,
            errorElement: <Error />,
        },
        {
            path: "/profile",
            element: <Navigate to="/settings?tab=profile" replace />,
            errorElement: <Error />,
        },
        {
            path: "/devices",
            element: <Devices />,
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
