import React from "react"; // Add the missing import statement

import { Link } from "react-router-dom";

const RandomCard = ({ picture, slug}) => {
    return (
<div>
<section>   
        <Link to={`/recette/${slug}`}><figure>{picture}</figure></Link>  
</section>
</div>
    )
};

export default RandomCard;