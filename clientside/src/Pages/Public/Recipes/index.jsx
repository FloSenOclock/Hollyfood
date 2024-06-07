import React, { useEffect, useContext, useState } from 'react';
import SortForm from '../../../Components/public/sortForm';
import Card from '../../../Components/public/Card';
import apiFetch from '../../../Utils/apiFetch';
import MyState from '../../../Components/public/MyContext';
import Pagination from '../../../Components/public/Pagination';

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Variable pour vérifier si l'écran est mobile
  const [isTablet, setIsTablet] = useState(false); // Variable pour vérifier si l'écran est tablette
 const [isDesktop, setIsDesktop] = useState(false); // Variable pour vérifier si l'écran est desktop

  // Constantes pour la pagination
  const itemsPerPage = isMobile ? 1 : (isTablet ? 2 : (isDesktop? 3 : 4)); // Nombre d'items par page (1 sur mobile, 4 sur les autres écrans)

  const handlePageClick = (data) => {
    // Fonction pour changer de page
    setCurrentPage(data.selected);
  };

  const { recipes, setRecipes, checked } = useContext(MyState);

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

  const selectedTags = Object.keys(checked).filter((key) => checked[key]);

  const filteredRecipes = recipes.filter((recipe) =>
    selectedTags.every((tag) =>
      recipe.Tags.some((recipeTag) => recipeTag.name === tag)
    )
  );

  const pageCount = Math.ceil(filteredRecipes.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredRecipes.slice(offset, offset + itemsPerPage);

  useEffect(() => {
    // Vérifier la taille de l'écran pour déterminer si c'est un mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // par exemple, considérant que les écrans mobiles ont une largeur inférieure ou égale à 768px
      setIsTablet(window.innerWidth <= 1280); // par exemple, considérant que les écrans tablettes ont une largeur inférieure ou égale à 1024px
      setIsDesktop(window.innerWidth <= 1536); // par exemple, considérant que les écrans desktop ont une largeur supérieure à 1024px
    };
    handleResize(); // Vérification initiale
    window.addEventListener('resize', handleResize); // Ajouter un écouteur d'événement pour la redimension de la fenêtre
    return () => window.removeEventListener('resize', handleResize); // Supprimer l'écouteur d'événement lors du démontage du composant
  }, []);

  return (
    <main>
      <SortForm />
      <div className="flex flex-col items-center m-4">
        {recipes ? (
          <div className="flex flex-nowrap">
            {currentItems.map((recipe) => (
              <Card
                key={recipe.id}
                score={recipe.averageRating}
                picture={recipe.picture}
                name={recipe.name}
                workTitle={recipe.work.title}
                difficulty={recipe.difficulty}
                slug={recipe.slug}
                id={recipe.id}
              />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <Pagination
          key={pageCount}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
    </main>
  );
};

export default Recipes;
