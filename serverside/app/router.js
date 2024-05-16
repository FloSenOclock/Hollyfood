import express from 'express';
// Import des controlleurs ici
import mainController from './Controllers/mainController.js';
import recipeController from './Controllers/recipeController.js';
import authController from './Controllers/authController.js';
import categoryController from './Controllers/categoryController.js';
// import cors from 'cors';
// import adminController from './Controllers/adminController.js';
import profilController from './Controllers/profilController.js'
import jwt from '../middlewares/jwt.js';
import emailUnique from '../middlewares/emailUnique.js';

// import cors from 'cors'
// import cookieParser from 'cookie-parser';
// A réétudier avec local storage

const router = express.Router();

// router.use(cors());
// router.use(cookieParser());


// Route pour la page d'accueil
router.get('/',mainController.home);

// Route pour afficher toutes les recettes
router.get('/recettes', recipeController.list); 

  // Route pour afficher une recette spécifique en utilisant le slug
  router.get('/recette/:slug', recipeController.getRecipe);

  
  

// Route pour afficher une page film/serie
router.get('/category/:name', categoryController.getOneCategory);



// Route pour afficher la page profil
router.get('/profil', jwt, profilController.profil);

// Route pour afficher  les données du formulaire d'inscription
router.get('/inscription',(req,res)=>{
  // Afficher le formulaire d'inscription
});

// Route pour vla vérification de l'email unique
// Route pour afficher le formulaire d'inscription
router.post('/checkEmail', emailUnique.emailSubForm);
router.post('/inscription', authController.processSubForm);


// Route pour afficher la page de connexion
// router.get('/connexion', authController.showLoginForm);
// Route pour traiter les données du formulaire de connexion
router.post('/connexion', authController.processLoginForm);

// Route pour afficher la page de gestion des recettes pour l'administrateur
// router.get('/profil/admin/recette', adminController.showRecipeManagementPage);
// Route pour afficher la page de gestion des utilisateurs pour l'administrateur
// router.get('/profil/admin/utilisateur', adminController.showUserManagementPage);

export default router;