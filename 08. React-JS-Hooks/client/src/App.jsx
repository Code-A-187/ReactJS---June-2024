import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import UserContext from './contexts/userContext';
import FakeLogin from './components/FakeLogin';



function App() {
	const [currentUser, setCurrentUser] = useState({});
	const login = (username, password) => {
		// TODO: validate password

		setCurrentUser({ username })
	}


	
	return (
		<UserContext.Provider value={{ user: currentUser, login }}>
			<Navbar />

			<Routes>
				<Route path='/' element = {< Navigate to='/articles' />}/>
				<Route path='/articles' element={<ArticleList />} />
				<Route path='/articles/:articleId/details' element={<Article />} />
				<Route path='/articles/create' element={<ArticleCreate />} />
				<Route path='/fake-login' element={<FakeLogin />} />
			</Routes>
		</UserContext.Provider>
  )
}

export default App;
