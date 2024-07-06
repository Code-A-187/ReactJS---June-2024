import './App.css'
import MovieList from './components/MovieList'

function App() {

    const movies = [
        'The Matrix',
        'Man of Steel',
        'Lord of the Rings',
        'Case for Christ',
    ];

  return (
        
    <>
        <MovieList movies={ movies } title= 'My Movies' />
         
    </>
  )
}

export default App
