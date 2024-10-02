import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import App from './routes/App.tsx';
import Es from './routes/Es.tsx';
import Instructions from './routes/Instructions.tsx';
import AddInstruction from './routes/AddInstruction.tsx';
import Main from './routes/Main.tsx'

import './assets/styles/main.sass';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/es",
        element: <Es />
      },
      {
        path: "/instructions",
        element: <Instructions />
      },
      {
        path: "/add_instruction",
        element: <AddInstruction />
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
