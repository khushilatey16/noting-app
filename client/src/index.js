import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home/Home';
import NewNote from './views/NewNote/NewNote';
import UpdateNote from './views/UpdateNote/UpdateNote';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Home />
      <NewNote />
      <UpdateNote />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
