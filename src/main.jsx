import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProviderMenu from '../contexts/ContextProviderMenu.jsx';
import ContextProviderUser from '../contexts/CotextProviderUser.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/TatarBy_Iketel_Front'>
      <ContextProviderUser>

      <ContextProviderMenu>
        <App/>
      </ContextProviderMenu>

      </ContextProviderUser>
    </BrowserRouter>
  </React.StrictMode>,
)
