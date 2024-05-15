import React, { useEffect, useState } from 'react';
import Carrousel from "../../../Components/public/carrousel";
import RandomCarrousel from "../../../Components/public/randomCarrousel";
import {boxOfficeSort, lastReleaseSort, randomSort} from "../../../Utils/sortFunction";

const Home = () => {   
  const [recipes, setRecipes] = useState([]);
  
  const getRecipes = async () => {
    try {
      const url = "http://localhost:3000/api";
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.recipes);
      console.log(data.recipes);
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