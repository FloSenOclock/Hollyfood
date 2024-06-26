import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../../Buttons/FavButton";


const FavCard = ({ picture, slug, id }) => {
  return (
    <article className="mb-2 mx-auto pb-2 sm:flex-col lg:flex lg:mx-24 shadow-md size-fit rounded-lg">
      <div className="flex flex-col" >
        <Link to={`/recettes/${slug}`}>
        <img src={picture} alt="image de la recette" className="pt-1 rounded-t-lg max-w-64 hover:brightness-75" />
        </Link>
      </div>
      <div className="my-4 text-center">
      <FavButton recipeId={id} />
      </div>
    </article>
  );
};

export default FavCard;
