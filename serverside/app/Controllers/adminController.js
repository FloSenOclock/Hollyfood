import { createUser, updateUser, deleteUser } from "../Queries/userRequest.js"
import { createRecipe,  updateRecipe,  deleteRecipe} from "../Queries/recipeRequest.js";
import { createWork, updateWork, deleteWork } from "../Queries/workRequest.js";
import { createTag, updateTag, deleteTag } from "../Queries/tagRequest.js";
import { createIngredient, updateIngredient, deleteIngredient } from "../Queries/ingredientRequest.js";
import { createProportion, updateProportion, deleteProportion } from "../Queries/proportionRequest.js";


const adminController = {

    // Fonction pour la gestion des utilisateurs    
    getcreateUser: async(req,res) =>{

        try {
          await createUser(req,res);
          
        } catch (error) {
          console.error('Erreur lors de la creation de  l\'utilisateur :', error);
          res.status(500).json({ message: 'Erreur serveur lors de la creation de  l\'utilisateur' });
        }
        },
        
    getupdateUser: async(req,res) =>{

        try {
            await updateUser(req,res);
            
        } catch (error) {
            console.error('Erreur lors de la mise à jour de  l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de  l\'utilisateur' });
        }
        },

    getdeleteUser: async(req,res) =>{

        try {
            await deleteUser(req,res);
            
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la suppression de l\'utilisateur' });
        }
        },

    // Fonction pour la gestion des recettes
        getcreateRecipe: async(req,res) =>{

            try {
            await createRecipe(req,res);
            
            } catch (error) {
            console.error('Erreur lors de la création de la recette :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de la recette' });
            }
            },
            
        getupdateRecipe: async(req,res) =>{

            try {
                await updateRecipe(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la recette :', error);
                res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de la recette' });
            }
            },

        getdeleteRecipe: async(req,res) =>{

            try {
                await deleteRecipe(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la suppression de la recette:', error);
                res.status(500).json({ message: 'Erreur serveur lors de la suppression de la recette' });
            }
            },

        // Fonction pour la gestion des oeuvres
        getcreateWork: async(req,res) =>{

            try {
            await createWork(req,res);
            
            } catch (error) {
            console.error('Erreur lors de la création de la recette :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de la recette' });
            }
            },
            
        getupdateWork: async(req,res) =>{

            try {
                await updateWork(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la recette :', error);
                res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de la recette' });
            }
            },
    
        getdeleteWork: async(req,res) =>{

            try {
                await deleteWork(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la suppression de la recette:', error);
                res.status(500).json({ message: 'Erreur serveur lors de la suppression de la recette' });
            }
            }, 


        // Fonction pour la gestion des tags
        
        getcreateTag: async(req,res) =>{

            try {
            await createTag(req,res);
            
            } catch (error) {
            console.error('Erreur lors de la création de la recette :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de la recette' });
            }
            },
            
        getupdateTag: async(req,res) =>{

            try {
                await updateTag(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la recette :', error);
                res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de la recette' });
            }
            },

        getdeleteTag: async(req,res) =>{

            try {
                await deleteTag(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la suppression de la recette:', error);
                res.status(500).json({ message: 'Erreur serveur lors de la suppression de la recette' });
            }
            }, 

        

        // Fonction pour la gestion des ingredients
        getcreateIngredient: async(req,res) =>{

            try {
            await createIngredient(req,res);
            
            } catch (error) {
            console.error('Erreur lors de la création de la recette :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de la recette' });
            }
            },
            
        getupdateIngredient: async(req,res) =>{

            try {
                await updateIngredient(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la recette :', error);
                res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de la recette' });
            }
            },

        getdeleteIngredient: async(req,res) =>{

            try {
                await deleteIngredient(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la suppression de la recette:', error);
                res.status(500).json({ message: 'Erreur serveur lors de la suppression de la recette' });
            }
            }, 

        // Fonction pour la gestion des proprotions

        getcreateProportion: async(req,res) =>{

            try {
            await createProportion(req,res);
            
            } catch (error) {
            console.error('Erreur lors de la création de la recette :', error);
            res.status(500).json({ message: 'Erreur serveur lors de la création de la recette' });
            }
            },
            
        getupdateProportion: async(req,res) =>{

            try {
                await updateProportion(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la recette :', error);
                res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de la recette' });
            }
            },

        getdeleteProportion: async(req,res) =>{

            try {
                await deleteProportion(req,res);
                
            } catch (error) {
                console.error('Erreur lors de la suppression de la recette:', error);
                res.status(500).json({ message: 'Erreur serveur lors de la suppression de la recette' });
            }
            }, 

        
}

export default adminController;
