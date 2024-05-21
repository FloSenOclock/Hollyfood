import React, { useEffect, useState } from 'react';
import Carrousel from "../../../Components/public/carrousel";
import RandomCarrousel from "../../../Components/public/randomCarrousel";
import {boxOfficeSort, lastReleaseSort, randomSort} from "../../../Utils/sortFunction";
import apiFetch from "../../../Utils/apiFetch";

const Home = ({recipes, setRecipes}) => {   

  
  const getRecipes = async () => {
    try {
      const data = await apiFetch('/', {}, 'GET'); 
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
          <Carrousel recipes={recipes} sortFunction={lastReleaseSort} />
        </section>
        <section>
            {/* fonction de tri pour affichage aléatoire */}
          <RandomCarrousel recipes={recipes} sortFunction={randomSort}/>
        </section>
      </main>
    </>
  );
};

export default Home;