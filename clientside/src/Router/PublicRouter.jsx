import React, {useState} from 'react';
import {Route, Routes } from "react-router-dom";

import Layout from '../Pages/Public/Layout';

import Home from '../Pages/Public/Accueil';
import About from '../Pages/Public/About';
import Connect from '../Pages/Public/Connexion';
import Contact from '../Pages/Public/Contact';
import Subscribe from '../Pages/Public/Inscription';
import LegalMention from '../Pages/Public/Legal';
import SiteMap from '../Pages/Public/SiteMap';
import Profile from '../Pages/Public/Profil';
import Recipes from '../Pages/Public/Recipes';
import RecipesByCategory from '../Pages/Public/RecipesByCategory';
import OneRecipe from '../Pages/Public/Recipe';
import NotFound from '../Pages/Public/404';
import ForgotPassword from '../Pages/Public/ForgotPassword';
import ResetPassword from '../Pages/Public/ResetPassword';

const PublicRouter = () => {

  const [recipes, setRecipes] = useState([]);

  const [recipesList, setRecipesList] = useState([]);

  const [recipe, setRecipe] = useState("");

  const [search, setSearch] = useState("");


    return (
        <Routes>
        <Route element={<Layout  search={search} setSearch={setSearch} recipesList={recipesList} setRecipesList={setRecipesList} />}>
          <Route index element={<Home recipes={recipes} setRecipes={setRecipes}  />} />

          <Route path="/accueil" element={<Home recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/connexion" element={<Connect />} />
          <Route path="/mdp-oublie" element={<ForgotPassword />} />
          <Route path='/nouveau-mot-de-passe/:id/:token' element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Subscribe />} />
          <Route path="/mentions-legales" element={<LegalMention />} />
          <Route path="/plandusite" element={<SiteMap />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/recettes" element={<Recipes recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/recettes/:category" element={<RecipesByCategory recipes={recipes} setRecipes={setRecipes} />}  />
          <Route path="/recette/:slug" element={<OneRecipe recipe={recipe} setRecipe={setRecipe} />} />
  

          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    );
};

export default PublicRouter;