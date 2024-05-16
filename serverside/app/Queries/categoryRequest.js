import {Category, Recipe, Work} from "../Models/index.js";

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json({ categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
    }
};

const getOneCategory = async (req, res) => {

    const categoryName = req.params.name;
    const category = await Category.findOne(
        {
            where : {name : categoryName}, 
            include: [
                {
                    model: Recipe,
                    through: 'recipe_has_category',
                    include: [
                        {
                            model: Work,
                            as: 'work',
                        },
                    ],
                },
            ],
        }
    );
    try {
       
        if (category) {
            res.json({ category });
        } else {
            res.status(404).json({ error: 'Catégorie non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la catégorie.' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.update(req.body);
            res.json({ category });
        } else {
            res.status(404).json({ error: 'Catégorie non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la catégorie.' });
    }
};

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json({ category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création de la catégorie.' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.destroy(req.body);
        res.json({ category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la catégorie.' });
    }
};

export { getAllCategories, getOneCategory, updateCategory, createCategory, deleteCategory };
