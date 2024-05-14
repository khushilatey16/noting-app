import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import NewNote from './views/NewNote/NewNote';
import Home from './views/Home/Home';
import UpdateNote from './views/UpdateNote/UpdateNote';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/new-note",
    element: <NewNote />
  },
  {
    path: "/update/:id",
    element: <UpdateNote />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
<Toaster />
<RouterProvider router={router} />
</>
);