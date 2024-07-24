import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element = {< Navigate to='/articles' />}/>
				<Route path='/articles' element={<ArticleList />} />
				<Route path='/articles/:articleId/details' element={<Article />} />
				<Route path='/articles/create' element={<ArticleCreate />} />
			</Routes>
		</>
  )
}

export default App;
