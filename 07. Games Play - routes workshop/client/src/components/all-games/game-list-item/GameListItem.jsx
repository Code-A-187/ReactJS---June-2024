import { Link } from 'react-router-dom'

export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
  return (

    <div class="allGames">
        <div class="allGames-info">
            <img src={imageUrl}/>
            <h6>{category}</h6>
            <h2>{title}</h2>
            <Link to={`/games/${_id}/details`} class="details-button">Details</Link>
        </div>
    </div>
       
   );
}