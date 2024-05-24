import {Recipe, Ingredient, Work} from "../Models/index.js"

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            include: [
                {
                    model: Work,
                    as: "work",  
                },
                {
                    model: Ingredient,
                    through: 'recipe_has_ingredient',
                },
            ],
        });
        res.json({ recipes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des recettes.' });
    }
};

const getOneRecipe = async (req, res) => {

    const recipeSlug = req.params.slug;
    const recipe = await Recipe.findOne(
        {
            where : {slug : recipeSlug}, 
            include: [
                {
                    model: Work,
                    as: "work",  
                },
                {
                    model: Ingredient,
                    through: 'recipe_has_ingredient',
                },
            ],
        }
    );
    try {
       
        if (recipe) {
            res.json({ recipe });
        } else {
            res.status(404).json({ error: 'Recette non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la recette.' });
    }
};
const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        if (recipe) {
            await recipe.update(req.body);
            res.json({ recipe });
        } else {
            res.status(404).json({ error: 'Recipe non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la recette.' });
    }
};

const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.json({ recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création de la recette.' });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.destroy(req.body);
        res.json({ recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la recette.' });
    }
};

export { getAllRecipes, getOneRecipe, updateRecipe, createRecipe, deleteRecipe };
