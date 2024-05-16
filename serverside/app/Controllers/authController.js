import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User from '../Models/User.js';
import validator from 'validator';


dotenv.config()


const authController = {
    
    processLoginForm: async (req, res) => {
        // Récupérer les données en POST
        const email = req.body.email;
   
        const password = req.body.password;

        try {
            // Vérifier avec Sequelize si l'utilisateur existe
            const user = await User.findOne({ where: { email: email, password: password } });
    
            // Si l'utilisateur existe
            if (user) {
                // Vérifier si le mot de passe est correct
                if (user.password === password) {
                    // Générer un token JWT
                    const token = jwt.sign({ userId: user.id}, process.env.SECRET_TOKEN, { expiresIn: '1h' });
                    // const tokenVerif = req.headers.authorization;
                    res.json({ token: token});

                } else {
                    // Mot de passe incorrect
                    res.status(401).json({ message: 'Non autorisé password' });
                }
            } else {
                // Utilisateur non trouvé
                res.status(404).json({ message: 'Non autorisé user' });
            }
        } catch (error) {
            // Erreur lors de la recherche de l'utilisateur
            console.error('Erreur lors de la recherche de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
        }
    },

    processSubForm: async (req, res) => {
        try {
            const { name, firstname, email, password } = req.body;
    
            const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
            if (!validator.isStrongPassword(password, options)) {
                throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
            }
    
            const user = await User.create({
                name,
                firstname,
                email: email.toLowerCase(),
                password
            });
    
            // Ajouter l'utilisateur créé à un tableau
            res.json({message: 'creation reussi'})
    
            
        } catch (error) {
            console.error(error);
           
        }
    }
    
};

export default authController;
