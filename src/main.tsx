import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App/App.tsx';
import { Login, Dashboard, ESafety, Files, Error } from './pages';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
