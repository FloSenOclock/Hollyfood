import React from 'react';
import Card from '../Card';


const Carrousel = ({recipes, sortFunction}) => {
    
    const sortedRecipes = sortFunction(recipes);

    return (
        <div>
            <div className="carrousel flex flex-row">
                {sortedRecipes.map((recipe) => (
                    <Card key={recipe.id}
                      score={recipe.score}
                      picture={recipe.picture}
                      name={recipe.name}
                      difficulty={recipe.difficulty}
                      slug={recipe.slug}      
                      />
                ))}
            </div>
        </div>
    );
};

export default Carrousel;