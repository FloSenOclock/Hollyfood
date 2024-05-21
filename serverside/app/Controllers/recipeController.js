import { Recipe, Ingredient,Work} from "../Models/index.js";

const recipeController = {

  async list(req, res) {
    
    try {
   
      const recipes = await Recipe.findAll({  // Je recupere la liste de toutes les recettes
        include: [{
          model: Work,
          as: 'work'
          },
          {
            model: Ingredient,
            through: 'recipe_has_ingredient'
          }
        ],
      });
      res.json({recipes});
    } catch (error) {
      res.status(404).json({ message: 'Recipes not found' });
    }
  },

  async getRecipe(req, res) {

    try {
      // Je recupere une recette en utilisant le slug
      const recipeSlug = req.params.slug;
      // Recherche de la recette ds la BDD en fct du slug.
      const recipe= await Recipe.findOne({
        where:{ slug: recipeSlug }
      });
      
      //Je vérifie si la recette existe
      if (!recipe) {
        // Si la recette n'est pas trouvée, renvoyer une erreur 404
        return res.status(404).json({ message: 'Recipe not found' });
      }

      // Si la recette est trouvée, renvoyer la recette au format JSON
      res.json({ recipe });
    } catch (error) {
      // En cas d'erreur, renvoyer une erreur 500 avec un message d'erreur
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default recipeController;
