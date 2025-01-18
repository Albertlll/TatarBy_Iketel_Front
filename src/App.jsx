import './App.css'
import Main from './components/Main/Main'
import { Routes, Route } from 'react-router-dom';
import Lesson from "./components/Main/components/Lesson/Lesson";
import Game from './components/Game/Game';
import PromptInput from './components/PromptInput/PromptInput';
import CreatePrompt from './components/PromptInputOld/CreatePrompt';
import Auth from './components/Enter/Auth/Auth';
import Register from './components/Enter/Register/Register';
import Enter from './components/Enter/Enter/Enter';
function App() {

  return (
    <div>

        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enter" element={<Enter />} />

          <Route path="/promptinput" element={<PromptInput />} />


          {/* <Route path="/lesson" element={<Game />} />
          <Route path="/promptinput" element={<PromptInput />} />
          <Route path="/oldpromptinput" element={<CreatePrompt />} /> */}
          {/* <Route path="/lesson" element={<Lesson />} /> */}

        </Routes>
          {/* <div className='main'>

      </div> */}
    </div>

  )
}

export default App
