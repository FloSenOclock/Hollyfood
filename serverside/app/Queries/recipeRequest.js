import {Recipe, Ingredient, Work, Tag, Score} from "../Models/index.js";
import { Sequelize } from 'sequelize';


const getAllRecipes = async (req, res) => {
    try {
        // Récupère toutes les recettes avec leurs associations
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
                {
                    model: Tag,
                    through: 'recipe_has_tag'
                }
            ]
        });

        // Pour chaque recette, récupère la note moyenne
        const recipesWithScores = await Promise.all(recipes.map(async (recipe) => {
            const result = await Score.findOne({
                attributes: [
                    [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRating']
                ],
                where: {
                    recipe_id: recipe.id
                },
                raw: true
            });

            // Ajoute la note moyenne à l'objet recette
            recipe.dataValues.averageRating = result && result.averageRating !== null ? parseFloat(result.averageRating).toFixed(2) : null;

            return recipe;
        }));

        res.json({ recipes: recipesWithScores });
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des recettes.' });
    }
};

const getOneRecipe = async (req, res) => {
    try {
        const recipeSlug = req.params.slug;

        // Fetch the recipe by slug and include associations
        const recipe = await Recipe.findOne({
            where: { slug: recipeSlug },
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

        const rating = await Score.findOne({
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRating']
            ],
            where: {
                recipe_id: recipe.id
            },
            raw: true
        });

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée.' });      }        

        res.json({ recipe, rating: rating && rating.averageRating !== null ? parseFloat(rating.averageRating).toFixed(2) : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la recette.' });
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

const updateRecipe = async (req, res) => {

    try {
        // J'appelle les proprietés de mon formulaire
        const { slug, name, quote, picture, instruction, total_time, servings, difficulty, score } = req.body;
        // J'appelle l'id qui sera définit dans ma requete

        // Je recherche dans ma base de donnée si la recette correspond à l'id
        const recipe = await Recipe.findOne({ where: {slug : slug } });

        // Si la recette est trouvé je mets à jour la ou les propriété(s) 
        if (recipe) {
            await recipe.update({
                slug: slug,
                name: name,
                quote: quote,
                picture: picture, 
                instruction: instruction, 
                total_time: total_time, 
                servings: servings, 
                difficulty: difficulty, 
                score: score
            });

            // Je vais recherchez à nouveau la recette pour vérifier et obtenir les dernières mises à jour de ma base de donnée 
            const updatedRecipe = await Recipe.findOne({ where: { slug: slug } });
            
            res.json({updatedRecipe});

        } else {
            res.status(404).json({ error: 'Recipe non trouvé' }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la recette.' });
    }
}


const deleteRecipe = async (req, res) => {
    try {
        const { slug } = req.body
        const recipeRemoved = await Recipe.destroy({
            where: {
                slug: slug
            }
        });
        res.json({ recipeRemoved });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la recette.' });
    }
};


export { getAllRecipes, getOneRecipe, updateRecipe, createRecipe, deleteRecipe};

