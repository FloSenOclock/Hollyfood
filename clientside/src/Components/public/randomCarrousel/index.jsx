import React from 'react';
import RandomCard from './randomCard';


const RandomCarrousel = ({recipes, sortFunction}) => {
    
    const sortedRecipes = sortFunction(recipes);

    return (
        <div>
            <div className="carrousel flex flex-row">
                {sortedRecipes.map((recipe) => (
                    <RandomCard key={recipe.id}                      
                      picture={recipe.picture}                      
                      slug={recipe.slug}      
                      />
                ))}
            </div>
        </div>
    );
};

export default RandomCarrousel;