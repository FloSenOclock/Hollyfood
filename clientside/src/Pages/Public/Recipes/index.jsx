import React, { useEffect, useContext} from 'react';
import SortForm from "../../../Components/public/sortForm";
import Carrousel from "../../../Components/public/carrousel";
import apiFetch from "../../../Utils/apiFetch";
import {boxOfficeSort} from "../../../Utils/sortFunction";
import MyState from '../../../Components/public/MyContext';

const Recipes = () =>  {

    const {recipes, setRecipes} = useContext(MyState)

    const getRecipes = async () => {
      try {
        const data = await apiFetch('recettes', {}, 'GET'); 
        setRecipes(data.recipes);
   
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getRecipes();
    }, []);


    return (
        <div>
            < SortForm />
            < Carrousel recipes={recipes} sortFunction={boxOfficeSort} />
        </div>
    )
};


export default Recipes;