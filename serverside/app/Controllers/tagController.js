import { getOneTag } from "../Queries/tagRequest.js";

const tagController = {

  // Fonction pour récupérer un seul tag
  getOneTag: async (req, res) => {

  try {
    await getOneTag(req,res);
   } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération du Tag.' });
  }
  },

  // Fonction pour gérer les ressources introuvables
  notFound : (req, res) => {
  res.status(404).json({ error: 'Ressource introuvable' });
  },


};


export default tagController;
