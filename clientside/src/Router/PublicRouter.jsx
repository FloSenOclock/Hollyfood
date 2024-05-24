import React, {useState, useEffect} from 'react';
import {Route, Routes, useLocation } from "react-router-dom";

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
import OneRecipe from '../Pages/Public/Recipe';
import NotFound from '../Pages/Public/404';
import ForgotPassword from '../Pages/Public/ForgotPassword';
import ResetPassword from '../Pages/Public/ResetPassword';
import MyState from '../Components/public/MyContext/index'


const PublicRouter = () => {

  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [search, setSearch] = useState("");
  const location= useLocation();

  useEffect(() => {
    return () => {
      setSearch(''),
      setRecipes([]);
    }
  }, [location])


  
    return (
      <MyState.Provider value={{recipes , setRecipes , recipe , setRecipe , search , setSearch}} >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/accueil" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/connexion" element={<Connect />} />
            <Route path="/mdp-oublie" element={<ForgotPassword />} />
            <Route path='/nouveau-mot-de-passe/:id/:token' element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription" element={<Subscribe />} />
            <Route path="/mentions-legales" element={<LegalMention />} />
            <Route path="/plandusite" element={<SiteMap />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/recettes" element={<Recipes />} />
            <Route path="/recette/:slug" element={<OneRecipe />} />
    

            <Route path="*" element={<NotFound />} />
          </Route>
          
        </Routes>
      </MyState.Provider>
       
    );
};

export default PublicRouter;