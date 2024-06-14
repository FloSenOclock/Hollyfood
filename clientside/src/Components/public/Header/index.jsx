import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../searchForm";


const Header = () => {

  const token = localStorage.getItem('token'); // récupérer le token de l'utilisateur
  const navigate=useNavigate(); // Hook de navigation
  const location = useLocation(); // Hook de localisation


  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleDeconnexion = () => {
    navigate('/accueil'); // Rediriger l'utilisateur vers la page d'accueil
    localStorage.removeItem('token'); // Supprimer le token de l'utilisateur
    window.location.reload(); // Recharger la page
  }

   // champs vide à l'état initial

  return (
    <header className="bg-black text-white">
      <div className="flex ">
    {/* Logo du site */}
    <div className="flex ml-2 mt-2 size-max w-1/3">
      {location.pathname !== "/accueil" && location.pathname !== "/" && (
        <Link to="/accueil">
          <img
            src="https://images.wakelet.com/resize?id=QS_n0aIFQJA6KDN9quGlP&h=277&w=768&q=85"
            alt="Logo du site"
          />
        </Link>
      )}
      {(location.pathname === "/accueil" || location.pathname === "/") && (
        <div>
          <img
            src="https://images.wakelet.com/resize?id=QS_n0aIFQJA6KDN9quGlP&h=277&w=768&q=85"
            alt="Logo du site"
          />
        </div>
      )}
    </div> 
  <div className="flex flex-col mt-10 justify-center pl-10 w-1/3">
      {/* Barre de recherche */}
      <div className="flex justify-center  hover:text-yellow-400">
        <SearchBar/>
      </div>      
      {/* Barre de navigation */}
      <nav className="flex justify-center lg:mt-10 text-xl lg:ml-10">
        <div>    
      {location.pathname === '/recettes' && (
        <Link className=" hover:text-yellow-400" to="/accueil">ACCUEIL</Link>
      )}
      {(location.pathname === '/accueil' || location.pathname === '/') && (
        <Link className=" hover:text-yellow-400" to="/recettes">RECETTES</Link>
      )}
      {!(location.pathname === '/recettes' || location.pathname === '/accueil' || location.pathname === '/') && (
        <div className="flex">
          <Link className="mr-6  hover:text-yellow-400 " to="/accueil">ACCUEIL </Link>
          <Link className=" hover:text-yellow-400" to="/recettes">  RECETTES</Link>
        </div>
      )}
    </div>       
      </nav>
  </div>
  <div className="flex w-1/3 mr-4 sm:justify-end sm:mt-10">
      {/* Lien vers la page de connexion avec Logo de Profil */}
    <div className="flex mt-4 ">
      {token ? (
        <div className="flex sm:flex-col sm:items-center ">
          
          <Link className="mx-1 sm:mb-6 " to="/profil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-white md:size-8 hover:text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link className="mx-1 sm:mx-3 font-semibold  hover:text-yellow-400 " onClick={handleDeconnexion}>
            Déconnexion
          </Link>
        </div>
      ) : (
        <div className="flex sm:flex-col sm:items-center ">
                    <Link className="mx-1 sm:mb-6" to="/connexion">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400  md:size-8 hover:text-white">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg>
          </Link>
          <Link className="mx-1 sm:mx-3 font-semibold hover:text-yellow-400" to="/inscription">
            Inscription
          </Link>

        </div>
      )}
    </div>
  </div>
      </div>       
      {/* Titre du site et sous-titre */}
      <div className="bg-white text-center ">
        <h1 className="text-black font-semibold text-6xl lg:text-8xl mb-2">HOLLYFOOD</h1>
        <h2 className="text-black italic">Les recettes cultes de tes films et séries préférés</h2>
      </div>
    </header>
  );
};

export default Header;


