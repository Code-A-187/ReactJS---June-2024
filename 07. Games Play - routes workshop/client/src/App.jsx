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
          <Home />

          <AllGames/>
          <CreateGame />
          <UserLogin />
          <UserRegister />
          
          
      </main>
      
    </div>
  )
}

export default App
