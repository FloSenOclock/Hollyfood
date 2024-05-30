import React, { useEffect, useContext, useState, useCallback } from 'react';
import apiFetch from "../../../Utils/apiFetch";
import { useParams } from 'react-router-dom';
import MyState from '../../../Components/public/MyContext';
import { RatedBar } from '../../../Components/public/ratingBar';
import { Rating } from 'react-simple-star-rating';

const OneRecipe = () => {
  const { recipe, setRecipe } = useContext(MyState);
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const { slug } = useParams();

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const getOneRecipe = async () => {
    try {
      const data = await apiFetch(`recette/${encodeURIComponent(slug)}`, {}, 'GET');
      setRecipe(data.recipe);
      setRating(data.recipe.averageRating);
      const existingScore = await apiFetch(`recette/${encodeURIComponent(slug)}`, {}, 'GET');
      setHasRated(existingScore.exists);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRatingClick = useCallback(async (value) => {
    console.log('Valeur de l\'étoile cliquée :', value);
    setRating(value);

    if (!recipe) {
      console.error('Recette non définie');
      return;
    }

    try {
      const encodedSlug = encodeURIComponent(slug);
      const response = await apiFetch(`recette/${encodedSlug}`, { recipe_id: recipe.id, rating: value }, 'POST');
      
      if (response.ok) {
        console.log('Rating submitted successfully');
        setHasRated(true); // Set hasRated to true after rating
        await getOneRecipe(); // Re-fetch recipe to update rating
      } else {
        console.error('Error submitting rating');
        const responseData = await response.json();
        if (responseData.error === "Vous avez déjà noté la recette.") {
          setHasRated(true);
        }
      }
    } catch (error) {
      console.error(error);
      if (error.message.includes("Vous avez déjà noté la recette.")) {
        setHasRated(true);
      }
    }
  }, [recipe, slug]);

  useEffect(() => {
    getOneRecipe();
  }, [slug]);

  
  return (
    <div>
      <h2>{recipe?.name}</h2>
      <div className='touch-none'>
        {isAuthenticated() ? (
          hasRated ? (
            <RatedBar score={recipe?.averageRating} />
          ) : (
            <Rating
              initialValue={rating}
              Name="Control"
              emptyStyle={{ display: "flex" }}
              SVGstyle={{ display: "inline-block", marginBottom: 5 }}
              style={{ marginBottom: -5 }}
              allowFraction={true}
              allowHover={false}
              disableFillHover={true}
              size={25}
              onClick={handleRatingClick}
            />
          )
        ) : (
          <RatedBar score={recipe?.averageRating} />
        )}
      </div>
      <section>
        <img src={recipe?.picture} alt="image de la recette" />
        <p>{recipe?.quote}</p>
        <p>{recipe?.total_time}</p>
      </section>
      <section>
        <div>
          <button>-</button>
          <p>{recipe?.servings}</p>
          <button>+</button>
          <div>{recipe?.difficulty}</div>
        </div>
        <div>
          <h3>Ingrédients :</h3>
          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h3>Instructions</h3>
        <p>{recipe?.instruction}</p>
        <div>Ajoutez aux favoris</div>
        <div>Partagez</div>
      </section>
      <section>
        {/* Ici s'affichent les commentaires de la recette */}
        <div>Commentaire</div>
        <button>Afficher plus</button>
        <button>Ajouter un commentaire</button>
      </section>
    </div>
  );
};

export default OneRecipe;
