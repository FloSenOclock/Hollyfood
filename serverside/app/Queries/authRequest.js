import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User from '../Models/User.js';
import validator from 'validator';
import nodemailer from 'nodemailer';

dotenv.config()


const processLoginForm = async (req, res) => {
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
};

const processSubForm = async (req, res) => {
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
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ where: { email: email } });  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      
      const token = jwt.sign({ userId: user.id}, process.env.SECRET_TOKEN, { expiresIn: '1h' });

      const resetPasswordUrl = `http://127.0.0.1:5173/nouveau-mot-de-passe/${user.id}/${token}`;

      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '1hollyfood1@gmail.com',
            pass: 'ymwt zpsw cmcp oqyf',
        },
      });

      var mailContent = {
        from: '1hollyfood1@gmail.com',
        to: email,
        subject: 'Réinitialisation du mot de passe',
        text: `Cliquez sur le lien pour réinitialiser votre mot de passe : ${resetPasswordUrl}`,
        };

        transporter.sendMail(mailContent, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Erreur serveur lors de l\'envoi du mail' });
            } else {
                console.log('Email sent: ' + info.response);
                return res.json({ message: 'Email envoyé' });
            }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur serveur lors de la recherche de l\'utilisateur' });
    }
};

const resetPassword = async (req, res) => {
    const { id, token } = req.params;
const { password } = req.body;

const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
        if (!validator.isStrongPassword(password, options)) {
            return res.status(400).send({
                Status: "Error",
                message: 'Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial'
            });
        }


try {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decoded) => {
        if (err) {
            return res.json({ Status: "Error with token" });
        } else {
            try {
                await User.update({ password: password }, { where: { id: id } });
                return res.send({ Status: "Success" });
            } catch (error) {
                return res.send({ Status: error.message });
            }
        }
    });
} catch (error) {
    return res.status(500).send({ Status: "Error occurred", error: error.message });
}

};

export { processLoginForm, processSubForm, forgotPassword, resetPassword};