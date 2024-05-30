import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../../Buttons/FavButton";


const FavCard = ({ picture, slug, id }) => {
  return (
    <div>
      <section className="ms-8">
        <Link to={`/recette/${slug}`}>
          <figure>{picture}</figure>
        </Link>
      </section>
      <FavButton recipeId={id} />
    </div>
  );
};

export default FavCard;
