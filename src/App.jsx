import './App.css'
import Main from './components/Main/Main'
import { Routes, Route, Navigate } from 'react-router-dom';
import Lesson from "./components/Main/components/Lesson/Lesson";
import Game from './components/Game/Game';
import PromptInput from './components/PromptInput/PromptInput';
import CreatePrompt from './components/PromptInputOld/CreatePrompt';
import Auth from './components/Enter/Auth/Auth';
import Register from './components/Enter/Register/Register';
import Enter from './components/Enter/Enter/Enter';
import HomePage from './components/HomePage/HomePage';
import useAuthStore from './components/Enter/stores/authStore';
import { useEffect } from 'react';
import GuestEnter from './components/GuestEnter/GuestEnter';
import GamesLayout from './components/Games/GamesLayout';
import Fairytail from './components/Games/Fairytail';
import MainPage from './components/Games/MainPage';
function App() {


  const { checkAuth, isAuthenticated } = useAuthStore();



  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  useEffect(() => {
    console.log("Привет привет")
  }, [])

  return (
    <>

        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/enter/guest-enter" element={<GuestEnter />} />


          <Route path="/game/fairytail/:id" element={<Fairytail />} />


          <Route path="/game" element={<MainPage />} />


          <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage />
            ) : (
              <Navigate to="/enter" replace />
            )
          }
        />

{/* <Route path="*" element={<Navigate to="/" replace />} /> */}







          <Route path="/promptinput" element={<PromptInput />} />


          {/* <Route path="/lesson" element={<Game />} />
          <Route path="/promptinput" element={<PromptInput />} />
          <Route path="/oldpromptinput" element={<CreatePrompt />} /> */}
          {/* <Route path="/lesson" element={<Lesson />} /> */}

        </Routes>
          {/* <div className='main'>

      </div> */}
    </>

  )
}

export default App
