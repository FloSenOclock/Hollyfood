import React, { useEffect, useState } from 'react';
import apiFetch from "../../../Utils/apiFetch";
import { useParams } from 'react-router-dom';


const OneRecipe = ({recipe, setRecipe}) => {

    const { slug } = useParams();
  
    const getOneRecipe = async () => {
      try {
        const data = await apiFetch(`recette/${slug}`, {}, 'GET');        
        setRecipe(data.recipe);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getOneRecipe();
    }, [slug]);




    return (
        <div>
<h2>{recipe.name}</h2>
<span>{recipe.score}</span>
<section>
    <img src="{recipe.picture}" alt="image de la recette" />
    <p>{recipe.quote}</p>
    <p>{recipe.total_time}</p>
</section>
<section>
<div>
    <button>-</button>
    <p>{recipe.servings}</p>
    <button>+</button>
    <div>{recipe.difficulty}</div>
</div>
<div>
    <h3>Ingrédients :</h3>
<ul>
    <li>Quantité ingrédient /  nom ingrédient</li>
    <li>Quantité ingrédient /  nom ingrédient</li>
    <li>Quantité ingrédient /  nom ingrédient</li>
</ul>
</div>
</section>
<section>
    <h3>Instructions</h3>
    <p>{recipe.instruction}</p>
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
    )
};

export default OneRecipe;
