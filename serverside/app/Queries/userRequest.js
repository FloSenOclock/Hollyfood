import User from "../Models/User.js";

const getAllUsers = async (req,res)=> {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des users.' });
    }
};

const getOneUser = async (req, res) => {
    const {id} = req.user; 
    try {
        const user = await User.findOne({
            where: { id: id },
        });

        if (user) {
            res.json({ user });
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'utilisateur.' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json({ user });
        } else {
            res.status(404).json({ error: 'User non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du User.' });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du user.' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy(req.body);
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du user.' });
    }
};

export { getAllUsers, getOneUser, updateUser, createUser, deleteUser };
