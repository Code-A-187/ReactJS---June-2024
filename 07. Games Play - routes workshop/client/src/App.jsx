import { Routes, Route } from 'react-router-dom';

import AllGames from "./components/all-games/AllGames"
import CreateGame from "./components/create-game/CreateGame"
import Header from "./components/Header"
import Home from "./components/home/Home"
import UserLogin from "./components/user-login/UserLogin"
import UserRegister from "./components/user-register/UserRegister"

function App() {

  return (
    <div id="box">

      <Header />

      <main id="main-content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/catalog" element={ <AllGames /> } />
            <Route path="/create" element={ <CreateGame /> } />
            <Route path="/login" element = { <UserLogin /> } />
            <Route path="/register" element = { <UserRegister/> } />
          </Routes>    
      </main>
      
    </div>
  )
}

export default App
