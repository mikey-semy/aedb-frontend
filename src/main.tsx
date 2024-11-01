import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import App from './App/App.tsx';
import Dashboard from './pages/Dashboard/DashboardPage.tsx';
import ESafety from './pages/ESafety/ESafetyPage.tsx';
import Manuals from './pages/Manuals/ManualsPage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/esafety",
        element: <ESafety />
      },
      {
        path: "/manuals",
        element: <Manuals />
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
