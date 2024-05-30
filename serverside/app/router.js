import express from 'express';

// Import des controlleurs ici
import tagController from './Controllers/tagController.js';
import mainController from './Controllers/mainController.js';
import recipeController from './Controllers/recipeController.js';
import authController from './Controllers/authController.js';
import profilController from './Controllers/profilController.js';
import adminController from './Controllers/adminController.js';
import jwtToken from '../middlewares/jwtToken.js';
import isAdmin from '../middlewares/isAdmin.js';
import emailUnique from '../middlewares/emailUnique.js';


const router = express.Router();

// router.use(cors());
// router.use(cookieParser());


// Route pour la page d'accueil
router.get('/',mainController.home);

// Route pour afficher toutes les recettes
router.get('/recettes', recipeController.getAllRecipes); 

// Route pour afficher une recette spécifique en utilisant le slug
router.get('/recette/:slug', recipeController.getOneRecipe);
router.post('/recette/:slug', jwtToken, recipeController.recipeRating);

// Route pour la vérification de l'email unique
// router.post('/checkEmail', emailUnique.emailSubForm);
// Route pour afficher le formulaire d'inscription
router.post('/inscription', emailUnique ,authController.processSubForm);


// Route pour traiter les données du formulaire de connexion
router.post('/connexion', authController.processLoginForm);

// Route pour mot de passe oublié
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:id/:token', authController.resetPassword);


// Route pour afficher les recettes par tag
router.get('/tag/:name', tagController.getOneTag);

// Route pour afficher la page profil
router.route('/profil')
.get(jwtToken, profilController.getOneUser)
.put(jwtToken, profilController.getupdateUser);


//Routes pour gérer les favoris
router.route('/favorites')
.get(jwtToken, profilController.getFavorite)
.post(jwtToken, profilController.addFavorite)
.delete(jwtToken, profilController.deleteFavorite);

// Route pour les pages de gestion des users, recipes, works, tags, ingredients et porportions de l'administrateur

// Methode pour créer,mettre à jour et supprimer des utilisateurs
router.route('/admin/user')
.post(isAdmin, adminController.getcreateUser)
.put(isAdmin, adminController.getupdateUser)
.delete(isAdmin, adminController.getdeleteUser);


// Methode pour créer,mettre à jour et supprimer des recettes
router.route('/admin/recettes')
.post(isAdmin, adminController.getcreateRecipe)
.put(isAdmin, adminController.getupdateRecipe)
.delete(isAdmin, adminController.getdeleteRecipe);

router.route('/admin/work')
.post(isAdmin, adminController.getcreateWork)
.put(isAdmin, adminController.getupdateWork)
.delete(isAdmin, adminController.getupdateWork);

// Methode pour créer,mettre à jour et supprimer des tags
router.route('/admin/tag')
.post(isAdmin, adminController.getcreateTag)
.put(isAdmin, adminController.getupdateTag)
.delete(isAdmin, adminController.getdeleteTag);

// Methode pour créer,mettre à jour et supprimer des ingredients
router.route('/admin/ingredient')
.post(isAdmin, adminController.getcreateIngredient)
.put(isAdmin, adminController.getupdateIngredient)
.delete(isAdmin, adminController.getdeleteIngredient);

// Methode pour créer,mettre à jour et supprimer des proportions
router.route('/admin/proportion')
.post(isAdmin, adminController.getcreateProportion)
.put(isAdmin, adminController.getupdateProportion)
.delete(isAdmin, adminController.getdeleteProportion);



export default router;