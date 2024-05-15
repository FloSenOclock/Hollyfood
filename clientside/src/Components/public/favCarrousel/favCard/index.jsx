import React from "react"; // Add the missing import statement

import { Link } from "react-router-dom";

const FavCard = ({ picture, slug}) => {
    return (
<div>
<section className="ms-8">   
        <Link to={`/recette/${slug}`}><figure>{picture}</figure></Link>
        <button>Like/Dislike</button>
</section>
</div>
    )
};

export default FavCard;