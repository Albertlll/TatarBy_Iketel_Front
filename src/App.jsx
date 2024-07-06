import './App.css'
import Main from './components/Main/Main'
import { Routes, Route } from 'react-router-dom';
import Lesson from "./components/Main/components/Lesson/Lesson";
import Game from './components/Game/Game';
function App() {

  return (
    <div>

        <Routes>
          <Route path="/*" element={<Game />} />
          {/* <Route path="/lesson" element={<Lesson />} /> */}

        </Routes>
          {/* <div className='main'>

      </div> */}
    </div>

  )
}

export default App
