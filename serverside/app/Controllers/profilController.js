import User from '../Models/User.js';

const profilController =  {

    profil: async (req,res) => {
        const {id} = req.user;
        try {
            const user = await User.findOne({where: {id: id}});
            
            if (user) {
                res.json({profil: user})
            }

            else {
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du profil utilisateur" });
        }
    }
};

 export default profilController;