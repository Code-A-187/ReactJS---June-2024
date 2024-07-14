import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/Home";
import Pricing from './components/Pricing';
import About from './components/About';
import NotFound from './components/NotFound';


function App() {
  

  return (
		<div className="bg-white">	

			<Header />

			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/pricing" element={<Pricing />}/> 
				<Route path="*" element={<NotFound/>}></Route>
			</Routes>

		</div>
  )
}

export default App
