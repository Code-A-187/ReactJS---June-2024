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
            <a href="#" class="details-button">Details</a>
        </div>
    </div>
       
   );
}