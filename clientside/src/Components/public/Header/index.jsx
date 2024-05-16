import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  const handleDeconnexion = () => {
    navigate('/accueil');
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <header className="bg-slate-300 text-center ">
      {/* Logo du site */}
      <div className="">
        <Link to="/accueil">
          <img src="/" alt="Logo du site" />
        </Link>
      </div>
      {/* Barre de recherche */}
      <div className="">
        <input type="text" placeholder="Recherche par Films, Séries,..." />
        <button type="submit">Rechercher</button>
      </div>
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
        <ul>
          <li>
            <Link to="/recettes">Recettes</Link>
          </li>
          <li>
            <Link to="/recettes/film">Films</Link>
          </li>
          <li>
            <Link to="/recettes/serie">Séries</Link>
          </li>
        </ul>
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
