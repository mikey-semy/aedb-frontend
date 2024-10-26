import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import App from './App/App.tsx';
import ESafety from './routes/ESafety.tsx';
import Manuals from './routes/Manuals.tsx';


import './assets/scss/main.scss';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Manuals />
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
    <RouterProvider router={router} />
  </StrictMode>,
);
