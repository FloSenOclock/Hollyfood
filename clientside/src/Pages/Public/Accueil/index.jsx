import React, { useEffect, useContext } from 'react';
import Carrousel from "../../../Components/public/carrousel";
import {boxOfficeSort, lastReleaseSort} from "../../../Utils/sortFunction";
import apiFetch from "../../../Utils/apiFetch";
import MyState from '../../../Components/public/MyContext';

const Home = () => {   

  const {recipes, setRecipes} = useContext(MyState) // On utilise le hook useContext pour récupérer les states de MyState
  
  const getRecipes = async () => { // On crée une fonction pour utiliser l'api qui renverra nos recettes
    try {
      const data = await apiFetch('recettes', {}, 'GET');  // On utilise la fonction apiFetch pour récupérer les recettes
      setRecipes(data.recipes); // On met à jour la state recipes avec les données récupérées
 
    } catch (error) {
      console.error(error);
    }
  };
 // On utilise un hook useEffect pour indiqué que a chaque chargement de la page on lui envoie la fonction api
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