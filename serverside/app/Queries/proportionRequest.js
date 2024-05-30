import { Proportion } from "../Models/index.js";

const createProportion = async (req, res) => {
    try {
        const proportion = await Proportion.create(req.body);
        res.json({ proportion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la création de la proportion" });
    }
};

const updateProportion = async (req,res)=>  {
    try {
        const {quantity, unit,  ingredient_id } = req.body;
        const proportion = await Proportion.findOne({ where: { ingredientId: ingredient_id } });
        if (proportion) {
            await proportion.update({
                quantity : quantity,
                unit: unit
            });
            const updatedProportion = await Proportion.findOne({ where: { ingredientId: ingredient_id} });
            res.json({ proportion: updatedProportion });
        } else {
            res.status(404).json({ error: 'Proportion non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour des proportions." });
    }
};



const deleteProportion = async (req, res) => {
    try {
        const { ingredient_id } = req.body
        const proportionRemoved = await Proportion.destroy({
            where:{
                ingredientId: ingredient_id
            }
            });
            res.json ({ proportionRemoved })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la suppression de la proportion." });
    }
};

export { updateProportion , createProportion, deleteProportion };