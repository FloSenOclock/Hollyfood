import getOneCategory from "../Models/Category/categoryRequest.js";
import {Category, Recipe, Work} from "../Models/index.js";


const categoryController = {

    getOneCategory : async (req, res) => {
        try {
            const categoryName = req.params.name;
            const category = await Category.findOne(
                {
                    where : {name : categoryName}, 
                    include: [
                        {
                            model: Recipe,
                            through: 'recipe_has_category',
                            include: [
                                {
                                    model: Work,
                                    as: 'work',
                                },
                            ],
                        },
                    ],
                }
            );
            if (category) {
                res.json({ category });
            } else {
                res.status(404).json({ error: 'Catégorie non trouvée' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la catégorie.' });
        }
    },


  notFound : (req, res) => {
    res.status(404).json({ error: 'Ressource introuvable' });
  },


};

export default categoryController;