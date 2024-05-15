import React from 'react';
import FavCard from './favCard';


const FavCarrousel = ({recipes}) => {
    
    

    return (
        <div>
            <div className="carrousel flex">
                {recipes.map((recipe) => (
                    <FavCard key={recipe.id}                      
                      picture={recipe.picture}                      
                      slug={recipe.slug}      
                      />
                ))}
            </div>
        </div>
    );
};

export default FavCarrousel;