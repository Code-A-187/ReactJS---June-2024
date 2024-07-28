import { Routes, Route } from 'react-router-dom';

import AllGames from "./components/all-games/AllGames"
import CreateGame from "./components/create-game/CreateGame"
import Header from "./components/Header"
import Home from "./components/home/Home"
import UserLogin from "./components/user-login/UserLogin"
import Logout from './components/logout/Logout';
import UserRegister from "./components/user-register/UserRegister"
import DetailsGame from './components/details-game/DetailsGame'


import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthContextProvider>
        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/login" element = { <UserLogin /> } />
                    <Route path="/register" element = { <UserRegister/> } />
                    <Route path="/logout" element = { <Logout /> } />
                    <Route path="/games" element={ <AllGames /> } />
                    <Route path="/games/:gameId/details" element={<DetailsGame />} />
                    <Route path="/games/create" element={ <CreateGame /> } />
                </Routes>    
            </main>
        </div>
    </AuthContextProvider>
  )
}

export default App
