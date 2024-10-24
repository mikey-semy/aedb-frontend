import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import App from './App.tsx';
import ESafety from './routes/ESafety.tsx';
import Manuals from './routes/Manuals.tsx';


import './assets/styles/main.sass';



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
