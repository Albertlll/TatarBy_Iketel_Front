import './App.css'
import Main from './components/Pages/Main/Main'
import Navbar from "./components/Shared/Navbar/Navbar";
import Menu from "./components/Shared/Menu/Menu";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Reg from './components/Pages/Reg/Reg';
function App() {

  return (
    <div>

        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Reg />} />
        </Routes>
          {/* <div className='main'>

      </div> */}
    </div>

  )
}

export default App
