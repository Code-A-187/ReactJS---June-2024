import { useEffect, useState } from "react"

const baseUrl = 'https://swapi.dev/api';

export default function CharacterList() {
    const [characters, setCharecters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseUrl}/people/`);
            const result = await response.json()

            console.log(result.results)

            setCharecters(result.results);
        }

        fetchCharacters();
    }, []);


    return (
        <>
            <h2>Characters</h2>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
};