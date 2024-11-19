import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { Bountied, Week, Hot, Month, Home, Interesting } from './pages/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<Interesting />} />
        <Route path='/bountied' element={<Bountied />} />
        <Route path='/hot' element={<Hot />} />
        <Route path='/week' element={<Week />} />
        <Route path='/month' element={<Month />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
