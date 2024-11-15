import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App/App.tsx';
import { ErrorPage, Dashboard, ESafety, Files } from './pages';

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
        path: "/files",
        element: <Files />
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
