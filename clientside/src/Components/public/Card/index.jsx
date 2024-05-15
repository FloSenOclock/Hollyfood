import { Link } from "react-router-dom";

const Card = ({score, picture, name, difficulty, slug}) => {
    return (
<div className="ms-8">
<article>
    <div>{score}</div>
    <figure>{picture}</figure>
    <div>
        <h2>{name}</h2>
    </div>
    <div>
        <h2>Titre du film</h2>
    </div>
    <div>
        <p>Nombres de commentaires</p>
    </div>
    <div>
        <p>{difficulty}</p>
    </div>
    <div>
        <Link to={`/recipe/${slug}`}>Détail</Link>
    </div>
</article>
</div>
    )
};

export default Card;