import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../Buttons/FavButton";
import { RatedBar } from "../ratingBar";


const Card = ({score, picture, name, difficulty, slug, workTitle, id}) => {

   
    return (
<div className="ms-8">

<article >
    <div >
       < RatedBar score={score}/>   
    </div>
    
    <figure>{picture}</figure>
    <div>
        <h2>{name}</h2>
    </div>
    <div>
        <h2>{workTitle}</h2>
    </div>
    <div>
        <p>Nombres de commentaires</p>
    </div>
    <div>
        <p>{difficulty}</p>
    </div>
    <div>
        <Link to={`/recette/${slug}`}>Détail</Link>
        </div>
          <FavButton recipeId={id} />
      </article>
    </div>
  );
};

export default Card;
