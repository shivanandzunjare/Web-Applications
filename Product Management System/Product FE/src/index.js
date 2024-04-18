import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import customRouter from '../src/Routing/Routing.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
           <RouterProvider router={customRouter} >
              <App/>
          </RouterProvider>
   


);


