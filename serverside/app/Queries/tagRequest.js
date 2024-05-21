import {Tag, Recipe} from "../Models/index.js";
// 

const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.json({ tags });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tags.' });
    }
};

const getOneTag = async (req, res) => {

    const tagName = req.params.name;
    const tag = await Tag.findOne(
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
            res.json({ tag });
        } else {
            res.status(404).json({ error: 'Tag non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du tag.' });
    }
};

const updateTag = async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id);
        if (tag) {
            await tag.update(req.body);
            res.json({ tag });
        } else {
            res.status(404).json({ error: 'Tag non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du Tag.' });
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

const deleteTag = async (req, res) => {
    try {
        const tag = await Tag.destroy(req.body);
        res.json({ tag });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du tag.' });
    }
};

export { getAllTags, getOneTag, updateTag, createTag, deleteTag };
