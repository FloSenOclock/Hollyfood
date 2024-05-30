
{/*fonction de tri pour affichage par les recettes les mieux notées */}
export const boxOfficeSort = (toto) => {
    return toto.sort((a, b) => b.averageRating - a.averageRating);
  };


{/*fonction de tri par date de création pour les dernières sorties */}
export const lastReleaseSort= (toto) => {
    return toto.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };


{/* fonction de tri pour affichage aléatoire */}
export const randomSort = (toto) => { 
  return toto.sort(() => Math.random() - 0.5);
};





