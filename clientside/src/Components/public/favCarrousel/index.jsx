import React from 'react';
import FavCard from './favCard';

const FavCarrousel = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorite Recipes</h2>
      <div className="carrousel flex">
        {favorites.map((favorite) => (
          <FavCard
            key={favorite.id}
            picture={favorite.picture}
            slug={favorite.slug}
            id={favorite.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FavCarrousel;
