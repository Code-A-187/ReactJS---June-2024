import { Routes, Route } from 'react-router-dom';

import AllGames from "./components/all-games/AllGames"
import CreateGame from "./components/create-game/CreateGame"
import Header from "./components/Header"
import Home from "./components/home/Home"
import UserLogin from "./components/user-login/UserLogin"
import UserRegister from "./components/user-register/UserRegister"
import DetailsGame from './components/details-game/DetailsGame'
import { useState } from 'react';
import { AuthContext } from './contexts/auth-context';

function App() {
  const [authState, setAuthstate] = useState({})

  const changeAuthState = (state) => {
    // TODO: Quick solution fix by implementing persisted authState
    localStorage.setItem('accessToken', state.accessToken)
    setAuthstate(state);
  }
  const contextData = {
	userId: authState._id,
	email: authState.email,
	accessToken: authState.accessToken,
	isAuthenticated: !!authState.email,
	changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
    <div id="box">

      <Header />

      <main id="main-content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element = { <UserLogin /> } />
            <Route path="/register" element = { <UserRegister/> } />
            <Route path="/games" element={ <AllGames /> } />
            <Route path="/games/:gameId/details" element={<DetailsGame />} />
            <Route path="/games/create" element={ <CreateGame /> } />
          </Routes>    
      </main>
      
    </div>
    </AuthContext.Provider>
  )
}

export default App
