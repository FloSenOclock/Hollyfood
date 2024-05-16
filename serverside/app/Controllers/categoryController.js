import {Category, Recipe, Work} from "../Models/index.js";
import {getOneCategory} from "../Queries/categoryRequest.js";


const categoryController = {

    getOneCategory: async (req, res) => {
        try {
          await getOneCategory(req, res);
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