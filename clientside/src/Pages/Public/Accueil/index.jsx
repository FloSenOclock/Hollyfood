import React, { useEffect, useContext } from 'react';
import Carrousel from "../../../Components/public/carrousel";
import {boxOfficeSort, lastReleaseSort} from "../../../Utils/sortFunction";
import apiFetch from "../../../Utils/apiFetch";
import MyState from '../../../Components/public/MyContext';

const Home = () => {   

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
    <>
      <main>
        <section>
          <h2>Box office</h2>
          {/*fonction de tri pour affichage par les recettes les mieux notées */}
          <Carrousel recipes={recipes} sortFunction={boxOfficeSort} />
        </section>
        <section>
          <h2>Dernières sorties</h2>
          {/*fonction de tri par date de création pour les dernières sorties */}
          <Carrousel recipes={recipes}   sortFunction={lastReleaseSort} />
        </section>
      </main>
    </>
  );
};

export default Home;