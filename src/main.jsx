import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/HOme';
import DetailsBook from './Components/DetailsBook/DetailsBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        loader: () => fetch('/books.json'),
        element: <Home />

      },
      {
        path: "/details/book/:title",
        loader: () => fetch('/books.json'),
        element: <DetailsBook />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
