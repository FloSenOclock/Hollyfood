import React, {useContext} from 'react';
import Card from '../Card';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carrousel = ({recipes, sortFunction, slider}) => {
    

    const sortedRecipes = sortFunction(recipes);
   
    const settings = {
        accessibility:true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,      
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                
              }
            }
          ]
      };

    return (
                <div>                
                    <Slider ref={slider} {...settings}>                    
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
                </Slider>
                </div>
    );
};

export default Carrousel;