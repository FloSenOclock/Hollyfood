import React, { useEffect, useContext} from 'react';
import SortForm from "../../../Components/public/sortForm";
import Carrousel from "../../../Components/public/carrousel";
import apiFetch from "../../../Utils/apiFetch";
import {boxOfficeSort} from "../../../Utils/sortFunction";
import MyState from '../../../Components/public/MyContext';

const Recipes = () =>  {


    const {recipes, setRecipes, checked} = useContext(MyState) // On utilise le hook useContext pour récupérer les states de MyState


    const getRecipes = async () => { // On crée une fonction pour utiliser l'api qui renverra nos recettes
      try {
        const data = await apiFetch('recettes', {}, 'GET');  // On utilise la fonction apiFetch pour récupérer les recettes
        setRecipes(data.recipes); // On met à jour la state recipes avec les données récupérées
   
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getRecipes();
    }, []); // On utilise un hook useEffect pour indiqué que a chaque chargement de la page on lui envoie la fonction api


    const selectedTags = Object.keys(checked).filter(key => checked[key]);

    // Filtrer les recettes pour qu'elles contiennent exactement tous les tags sélectionnés
    const filteredRecipes = recipes.filter(recipe =>
        selectedTags.every(tag =>
            recipe.Tags.some(recipeTag => recipeTag.name === tag)
        )
    );


    return (
        <div>
            < SortForm />
            { selectedTags.length > 0  ?
                <Carrousel recipes={filteredRecipes} sortFunction={boxOfficeSort}  />

                :

                < Carrousel recipes={recipes} sortFunction={boxOfficeSort} />
            }
        
        </div>
    )
};


export default Recipes;