import Recipe from "../models/Recipe.js";

const mainController = {

    home: async function (req, res) {
      const recipes = await Recipe.findAll();

      res.json({recipes})
    },
  
    notFound: function(req, res) {
      res.status(404).render('error', {
        message: 'Page non trouvée',
      });
    },
  };
  
  export default mainController;