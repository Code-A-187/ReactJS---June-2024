import { useState } from 'react';
import './App.css'

function App() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of steel',
        'Case for Christ',
        'Lord of the rings',
        
      ])

    const buttonClickHandler = () => {
        setMovies((oldMovies) => {
            // const newMovies = oldMovies.slice();
            
            const newMovies = [...oldMovies];
            newMovies[3] = 'Harry Potter'
            newMovies.push('Avangers')
            newMovies.shift()

            return newMovies
        });

    };
    
    return (
        <>
            <h1>Movies</h1>

            <ul>
                {movies.map(movie=> <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={buttonClickHandler}>Change</button>
        </>
  )
}

export default App
