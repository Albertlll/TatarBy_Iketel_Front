import './App.css'
import Main from './components/Main/Main'
import { Routes, Route } from 'react-router-dom';
import Lesson from "./components/Main/components/Lesson/Lesson";
import Game from './components/Game/Game';
import PromptInput from './components/PromptInput/PromptInput';
import CreatePrompt from './components/PromptInputOld/CreatePrompt';
function App() {

  return (
    <div>

        <Routes>
          <Route path="/lesson" element={<Game />} />
          <Route path="/promptinput" element={<PromptInput />} />
          <Route path="/oldpromptinput" element={<CreatePrompt />} />
          {/* <Route path="/lesson" element={<Lesson />} /> */}

        </Routes>
          {/* <div className='main'>

      </div> */}
    </div>

  )
}

export default App
