const AdminRecipe = () => {
{/* Fonctions pour ajouter et/ou supprimer un ingrédient */}
    const addIngredient = () => {
        const list = document.getElementById('ingredients-list');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <input type="text" name="ingredient-nom[]" placeholder="Nom de l'ingrédient">
            <input type="text" name="ingredient-quantite[]" placeholder="Quantité">
            <input type="text" name="ingredient-unite[]" placeholder="Unité">
            <button type="button" onClick={removeIngredient}>Supprimer ingrédient</button>
        `;
        list.appendChild(newItem);
    }

    const removeIngredient = (event) => {
        const item = event.target.parentNode;
        item.parentNode.removeChild(item);
    }

    return (
        <div className="gestion-recettes">
            <h3>Gestion Recettes</h3>
{/* Boutons d'accès aux Pages gestion de Recettes ou Utilisateurs */}
            <div className="admin-buttons">
                <a href="AdminRecipe">Recettes</a>
                <a href="../AdminUser">Utilisateurs</a>
            </div>
{/* Bouton qui ouvre le formulaire d'ajout d'une recette + Formulaire */}
            <button>Ajouter une recette</button>
            <div className="add-recipe-form">
                <form>
                    <div>
                        <label htmlFor="slug">Slug:</label>
                        <input type="text" id="slug" name="slug" />
                    </div>
                    <div>
                        <label htmlFor="nom-recette">Nom de la recette:</label>
                        <input type="text" id="nom-recette" name="nom-recette" />
                    </div>
                    <div>
                        <label htmlFor="ingredients">Ingrédients:</label>
                        <ul id="ingredients-list">
                            <li>
                                <input type="text" name="ingredient-nom[]" placeholder="Nom de l'ingrédient" />
                                <input type="text" name="ingredient-quantite[]" placeholder="Quantité" />
                                <input type="text" name="ingredient-unite[]" placeholder="Unité" />
                                <button type="button" onClick={addIngredient}>Ajouter ingrédient</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="personnes">Nombre de personnes:</label>
                        <input type="number" id="personnes" name="personnes" min="1" />
                    </div>
                    <div>
                        <label htmlFor="niveau-difficulte">Niveau de difficulté:</label>
                        <select id="niveau-difficulte" name="niveau-difficulte">
                            <option value="facile">Facile</option>
                            <option value="moyen">Moyen</option>
                            <option value="difficile">Difficile</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="temps-preparation">Temps de préparation:</label>
                        <input type="text" id="temps-preparation" name="temps-preparation" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description"></textarea>
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" name="image" />
                    </div>
                    <div>
                        <label htmlFor="nom-oeuvre">Nom de l'oeuvre associée:</label>
                        <input type="text" id="nom-oeuvre" name="nom-oeuvre" />
                    </div>
                    <div>
                        <label htmlFor="type-oeuvre">Type d'oeuvre associée:</label>
                        <select id="type-oeuvre" name="type-oeuvre">
                            <option value="film">Film</option>
                            <option value="serie">Série</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="tags">Tags:</label>
                        <input type="text" id="tags" name="tags" />
                    </div>
                    <button type="submit">Valider</button>
                </form>
            </div>
{/* Liste des recettes (tableau)*/}
    <table className="recipe-list">
        <thead>
            <tr>
                <th>Nom de la recette:</th>
            </tr>
        </thead>
                <tbody>
                    <tr>
                        <td>Recette 1</td> 
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                    </tr>
                    <tr>
                        <td>Recette 2</td>
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                    </tr>
                    <tr>
                        <td>Recette 3</td>
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                    </tr>
                </tbody>
    </table>
    </div>
);
}
export default AdminRecipe;
