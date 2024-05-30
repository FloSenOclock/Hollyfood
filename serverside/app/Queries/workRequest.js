import { Work } from "../Models/index.js";

const createWork = async (req, res) => {
    try {
        const work = await Work.create(req.body);
        res.json({ work });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la création de 'l'oeuvre'." });
    }
};

const updateWork = async (req,res)=>  {
    try {
        const { title, synopsis } = req.body;
    
        const work = await Work.findOne({ where: {title: title} });
        if (work) {

            await work.update({
                title : title,
                synopsis: synopsis
            });

            const updatedWork = await Work.findOne({ where: { title: title } });
            
            res.json({ work: updatedWork });
        } else {
            res.status(404).json({ error: 'Oeuvre non trouvée' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de 'l'oeuvre'." });
    }
};


const deleteWork = async (req, res) => {
    try {
        const { title } = req.body
        const workRemoved = await Work.destroy({
            where:{
                title: title
            }
            });
            res.json ({ workRemoved })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de la suppression de 'l'oeuvre'." });
    }
};

export { updateWork , createWork, deleteWork };