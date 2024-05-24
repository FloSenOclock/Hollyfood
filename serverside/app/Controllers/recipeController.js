import { getOneRecipe, getAllRecipes } from "../Queries/recipeRequest.js";

const recipeController = {

getOneRecipe: async(req,res) =>{

try {
  await getOneRecipe(req,res);
  
} catch (error) {
  console.error('Erreur lors de la recherche de l\'utilisateur :', error);
  res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
}
},

getAllRecipes: async(req,res) => {

  try {await getAllRecipes(req,res)
  
  } catch (error) {
    console.error('Erreur lors de la recherche de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
  }
},
};

export default recipeController;














