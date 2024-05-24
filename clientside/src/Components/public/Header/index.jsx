import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../searchForm";


const Header = () => {

  const token = localStorage.getItem('token');
  const navigate=useNavigate();
  const location = useLocation();

  const handleDeconnexion = () => {
    navigate('/accueil');
    localStorage.removeItem('token');
    window.location.reload();
  }

   // champs vide à l'état initial

  return (
    <header className="bg-slate-300 text-center ">
      {/* Logo du site */}
      <div className="">
        {location.pathname !== '/accueil' && location.pathname !== '/' && (
          <Link to="/accueil">
            <img src="/" alt="Logo du site" />
          </Link>
        )}
        {(location.pathname === '/accueil' || location.pathname === '/') && (
          <div><img src="/" alt="Logo du site" /></div>
        )}
      </div>
      {/* Barre de recherche */}
        <SearchBar />
      {/* Lien vers la page de connexion avec Logo de Profil */}
      <div>
        {token ?
              (<>
              <Link className="mx-4" onClick={handleDeconnexion}>Déconnexion</Link>
              <Link className="mx-4" to="/profil">Profil</Link>
              </>) 
              : 
              (<>
              <Link className="mx-4" to="/inscription">Inscription</Link>
              <Link className="mx-4" to="/connexion">Connexion</Link>
              </>)}
        </div>
      
      {/* Barre de navigation */}
      <nav className="">
        <div>
        <div>
      {location.pathname === '/recettes' && (
        <Link to="/accueil">Accueil</Link>
      )}
      {(location.pathname === '/accueil' || location.pathname === '/') && (
        <Link to="/recettes">Recettes</Link>
      )}
      {!(location.pathname === '/recettes' || location.pathname === '/accueil' || location.pathname === '/') && (
        <div>
          <Link to="/accueil">Accueil  </Link>
          <Link to="/recettes">  Recettes</Link>
        </div>
      )}
    </div>       
        </div>
      </nav>
      {/* Titre du site et sous-titre */}
      <div className="">
        <h1>HOLLYFOOD</h1>
        <h2>Les recettes cultes de tes films et séries préférés</h2>
      </div>
    </header>
  );
};

export default Header;
