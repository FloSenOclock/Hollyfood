import React from 'react';
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

const PublicRouter = () => {
    return (
        <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/accueil" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/connexion" element={<Connect />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Subscribe />} />
          <Route path="/mentions-legales" element={<LegalMention />} />
          <Route path="/plandusite" element={<SiteMap />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/recettes" element={<Recipes />} />
          <Route path="/recettes/:category" element={<RecipesByCategory />} />
          <Route path="/recette/:slug" element={<OneRecipe />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    );
};

export default PublicRouter;