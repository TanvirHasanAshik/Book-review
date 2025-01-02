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
import ListedBooks from './Components/ListedBooks/ListedBooks';

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
      },
      {
        path: "/listed-book",
        loader: () => fetch('/books.json'),
        element: <ListedBooks />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
