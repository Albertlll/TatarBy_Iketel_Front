import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lesson from './components/Main/components/Lesson/Lesson.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/TatarBy_Iketel_Front'>

        <App/>

    </BrowserRouter>
  </React.StrictMode>,
)
