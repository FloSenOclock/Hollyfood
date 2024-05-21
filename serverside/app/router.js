import express from 'express';



// Import des controlleurs ici
import tagController from './Controllers/tagController.js';
import mainController from './Controllers/mainController.js';
import recipeController from './Controllers/recipeController.js';
import authController from './Controllers/authController.js';
import categoryController from './Controllers/categoryController.js';
// import adminController from './Controllers/adminController.js';
import profilController from './Controllers/profilController.js'
import jwt from '../middlewares/jwt.js';
import emailUnique from '../middlewares/emailUnique.js';



const router = express.Router();

// router.use(cors());
// router.use(cookieParser());


// Route pour la page d'accueil
router.get('/',mainController.home);

// Route pour afficher toutes les recettes
router.get('/recettes', recipeController.list); 
// Route pour afficher une page film/serie
router.get('/recettes/:name', categoryController.getOneCategory);

// Route pour afficher une recette spécifique en utilisant le slug
router.get('/recette/:slug', recipeController.getRecipe);

// Route pour afficher une page film/serie
router.get('/category/:name', categoryController.getOneCategory);

// Route pour afficher la page profil
router.get('/profil', jwt, profilController.profil);


// Route pour vla vérification de l'email unique
router.post('/checkEmail', emailUnique.emailSubForm);
// Route pour afficher le formulaire d'inscription
router.post('/inscription', authController.processSubForm);


// Route pour traiter les données du formulaire de connexion
router.post('/connexion', authController.processLoginForm);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:id/:token', authController.resetPassword);


// ------------------------------
// Routes pour gérer les Tags ????
// ------------------------------

// Route pour afficher les recettes par tag
router.get('/tag/:name', tagController.getOneTag)


// Route pour afficher la page de gestion des recettes pour l'administrateur
// router.get('/profil/admin/recette', adminController.showRecipeManagementPage);

// Route pour afficher la page de gestion des utilisateurs pour l'administrateur
// router.get('/profil/admin/utilisateur', adminController.showUserManagementPage);


export default router;