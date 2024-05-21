import React, { useEffect } from 'react';
import SortForm from "../../../Components/public/sortForm";
import Carrousel from "../../../Components/public/carrousel";
import apiFetch from "../../../Utils/apiFetch";
import {boxOfficeSort} from "../../../Utils/sortFunction";
import { useParams } from 'react-router-dom';



const RecipesByCategory = ({recipes, setRecipes}) =>  {

    const { category } = useParams();
  
    const getRecipesByCategory = async () => {
      try {
        const data = await apiFetch(`recettes/${category}`,{}, 'GET'); 
        setRecipes(data.category.Recipes);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getRecipesByCategory();
    }, [category]);


    return (
        <div>
            < SortForm />
            < Carrousel recipes={recipes} sortFunction={boxOfficeSort} />
        </div>
    )
};


export default RecipesByCategory;