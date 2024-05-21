import { processLoginForm, processSubForm, forgotPassword, resetPassword } from "../Queries/authRequest.js";

const authController = {

    processLoginForm: async (req, res) => { 
        try {
            await processLoginForm(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
        }
    },

    processSubForm: async (req, res) => {
        try {
            await processSubForm(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de l\'utilisateur' });
        }
    },

    forgotPassword: async (req, res) => {
        try {
            await forgotPassword(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
        }
    },

    resetPassword: async (req, res) => {
        try {
            await resetPassword(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur serveur lors de la réinitialisation du mot de passe' });
        }
    },
}; 
  

export default authController;
