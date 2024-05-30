import { Recipe, User, Score } from "../Models/index.js";
import { Sequelize } from 'sequelize';



const recipeRating = async (req, res) => {
    try {
        const { recipe_id } = req.body; // Récupérer l'ID de la recette à partir du corps de la requête
        const userId = req.user.id;     // Récupérer l'ID de l'utilisateur à partir de la requête

        if (!recipe_id) { // Vérifier si l'ID de la recette est fourni
            return res.status(400).json({ error: "Recipe ID is required." });
        }

        // Vérifier si l'utilisateur a déjà noté la recette
        const existingScore = await Score.findOne({
            where: {
                recipe_id,
                user_id: userId
            }
        });

        if (existingScore) { // Si l'utilisateur a déjà noté la recette
            return res.status(400).json({ error: "Vous avez déjà noté la recette." });
        }

        // Créer une nouvelle note
        await Score.create({
            recipe_id,
            user_id: userId,
            rating: req.body.rating
        });
        res.json({ message: "La recette a bien été notée." });


} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
}
};


export { recipeRating };