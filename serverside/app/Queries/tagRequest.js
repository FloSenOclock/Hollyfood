import {Tag, Recipe} from "../Models/index.js";
// 

// Fonction pour obtenir tous les tags
const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.findAll(); // Trouver tous les tags
        res.json({ tags }); // Renvoyer tous les tags
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tags.' });
    }
};

// Fonction pour obtenir un tag
const getOneTag = async (req, res) => {

    const tagName = req.params.name; // Récupérer le nom du tag à partir de la requête
    const tag = await Tag.findOne( // Trouver le tag par son nom et inclure les recettes
        {
            where : {name : tagName}, 
            include: [
                {
                    model: Recipe,
                    through: 'recipe_has_tag',
                    
                },
            ],
        }
    );
    try {
       
        if (tag) {
            res.json({ tag });          // Renvoyer le tag
        } else {
            res.status(404).json({ error: 'Tag non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du tag.' });
    }
};

const createTag = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.json({ tag });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du tag.' });
    }
};


const updateTag = async (req, res) => {
    try {
        // J'appelle les proprietés de mon formulaire
        const { name } = req.body;
  
        // Je recherche dans ma base de donnée si un tag correspond à l'id
        const tag = await Tag.findOne({ where: { name: name } });

        // Si le tag est trouvé je mets à jour la ou les propriété(s) 
        if (tag) {
            await tag.update({
                name: name
            });

            // Je vais recherchez à nouveau le tag pour vérifier et obtenir les dernières mises à jour de ma base de donnée 
            const updatedTag = await Tag.findOne({ where: { name: name } });
            
            res.json({ updatedTag});
        } else {
            res.status(404).json({ error: 'Tag non trouvé' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du Tag.' });
    }
};

// Fonction pour supprimer un tag
const deleteTag = async (req, res) => {
    try {
        const { title } = req.body
        const tagRemoved = await Tag.destroy({
            where: {
                title: title
            }
        });
        res.json({ tagRemoved });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du tag.' });
    }
};

export { getAllTags, getOneTag, updateTag, createTag, deleteTag };
