import React, {useContext} from 'react';
import Card from '../Card';
import MyState from '../MyContext';



const Carrousel = ({recipes, sortFunction}) => {
    

    const sortedRecipes = sortFunction(recipes);

    return (
        <div>
            <div className="flex flex-row">
                {sortedRecipes.map((recipe) => (
                    <Card key={recipe.id}
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
        </div>
    );
};

export default Carrousel;