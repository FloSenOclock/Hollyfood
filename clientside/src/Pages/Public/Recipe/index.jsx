const OneRecipe = () => {
    return (
        <div>
<h2>Titre de la recette</h2>
<span>Note de la recette avec étoiles</span>
<section>
    <img src="/" alt="image de la recette" />
    <p>Paragraphe anecdotes sur la recette</p>
    <p>Temps de préparation</p>
</section>
<section>
<div>
    <button>-</button>
    <p>Nombre de personnes</p>
    <button>+</button>
    <div>Difficulté</div>
</div>
<div>
    <h3>Ingrédients :</h3>
<ul>
    <li>Quantité ingrédient /  nom ingrédient</li>
    <li>Quantité ingrédient /  nom ingrédient</li>
    <li>Quantité ingrédient /  nom ingrédient</li>
</ul>
</div>
</section>
<section>
    <h3>Instructions</h3>
    <p>Etapes de la recettes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloribus doloremque facere, ex laboriosam qui quaerat veniam dolores nesciunt harum amet, voluptas quae. Similique, incidunt totam aliquam dolores facere maxime obcaecati veniam nobis cupiditate doloremque atque fugit aspernatur nostrum tempore. Repellat inventore eveniet animi sint exercitationem, vitae soluta quibusdam cupiditate velit sunt fuga, numquam recusandae architecto minima ratione ullam itaque? Et consequatur qui sed ipsum asperiores fugiat laudantium, dignissimos soluta ex exercitationem veritatis. Nam architecto exercitationem, commodi eos numquam, rem placeat provident dolore officiis nostrum fugit delectus, ullam consequuntur eum? Expedita doloribus, ex aut enim corrupti deserunt distinctio possimus molestiae.</p>
    <div>Ajoutez aux favoris</div>
    <div>Partagez</div>
</section>
<section>
    {/* Ici s'affichent les commentaires de la recette */}
    <div>Commentaire</div> 
    <button>Afficher plus</button>
    <button>Ajouter un commentaire</button>
</section>
        </div>
    )
};

export default OneRecipe;
