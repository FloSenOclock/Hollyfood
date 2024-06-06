import React from 'react';
import FavCard from './favCard';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavCarrousel = ({ favorites, slider }) => {

  const settings = {
    accessibility:true,
    arrows: false,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 3,
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
        {favorites.map((favorite) => (
          <FavCard
            key={favorite.id}
            picture={favorite.picture}
            slug={favorite.slug}
            id={favorite.id}
          />
        ))}
         </Slider>
      </div>
  );
};

export default FavCarrousel;
