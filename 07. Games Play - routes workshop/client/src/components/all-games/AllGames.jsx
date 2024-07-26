
import { useGetAllGames } from "../../hooks/useGames";
import GameListItem from "./game-list-item/GameListItem";

export default function AllGames() {
    const [games] = useGetAllGames();

    return (
        <section id="catalog-page">
                <h1>All Games</h1>

                {games.length > 0
                    ? games.map(game => <GameListItem key={game._id} {...game} />)
                    : <h3 className="no-articles">No games yet</h3>
                }

        </section>
    );
}