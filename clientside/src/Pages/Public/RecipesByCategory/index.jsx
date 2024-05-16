import React, { useEffect, useState } from 'react';
import SortForm from "../../../Components/public/sortForm";
import Carrousel from "../../../Components/public/carrousel";
import apiFetch from "../../../Utils/apiFetch";
import {boxOfficeSort} from "../../../Utils/sortFunction";
import { useParams } from 'react-router-dom';



const RecipesByCategory = () =>  {

    const [recipes, setRecipes] = useState([]);
    const { category } = useParams();
  
    const getRecipesByCategory = async () => {
      try {
        const data = await apiFetch(`category/${category}/`, {}, 'GET'); 
        setRecipes(data.category.Recipes);
        console.log(data.category.Recipes);
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