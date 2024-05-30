import { Ingredient } from "../Models/index.js";

const createIngredient = async (req, res) => {
    try {
        const ingredient = await Ingredient.create(req.body);
        res.json({ ingredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la création de 'l'oeuvre'." });
    }
};

const updateIngredient = async (req,res)=>  {
    try {
        const { name } = req.body;

        const ingredient = await Ingredient.findOne({ where: { name: name } });
        if (ingredient) {

            await ingredient.update({
                name: name
            });

            const updatedingredient = await Ingredient.findOne({ where: { name: name } });
            
            res.json({ updatedingredient });
        } else {
            res.status(404).json({ error: 'Oeuvre non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de 'l'oeuvre'." });
    }
};


const deleteIngredient = async (req, res) => {
    try {
        const { name } = req.body
        const ingredientRemoved = await Ingredient.destroy({
            where:{
                name: name
            }
            });
            res.json ({ ingredientRemoved })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la suppression de 'l'oeuvre'." });
    }
};

export { updateIngredient , createIngredient, deleteIngredient };