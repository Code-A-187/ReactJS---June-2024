
import Navbar from './components/Navbar'

import ArticleList from './components/ArticleList';
import Article from './components/Article';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';



function App() {
	
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element = {< Navigate to='/articles' />}/>
				<Route path='/articles' element={<ArticleList />} />
				<Route path='/articles/:articleId/details' element={<Article />} />
			</Routes>
		</>
  )
}

export default App
