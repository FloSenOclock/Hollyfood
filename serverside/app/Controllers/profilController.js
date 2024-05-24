import { getOneUser } from '../Queries/userRequest.js';

const profilController =  {

    getOneUser: async (req,res) => {
        
        try {
            await getOneUser(req,res);

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du profil utilisateur" });
        }
    },

    notFound : (req,res)=>  {
        res.status(404).json({ error: 'Ressource introuvable' });
      },
};

 export default profilController;