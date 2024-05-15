// import Logo from '../../Asset/Logo.png';
// import LogoProfil from '../../Asset/LogoProfil.png';

import { Link } from "react-router-dom";

const Header = () => {
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
      <div className="">
        <Link to="/inscription">Inscription</Link>
        <Link to="/connexion">
          <img src="/" alt="Bouton de connexion au profil" />
        </Link>
      </div>
      {/* Barre de navigation */}
      <nav className="">
        <ul>
          <li>
            <Link to="/recettes">Recettes</Link>
          </li>
          <li>
            <Link to="/recettes">Films</Link>
          </li>
          <li>
            <Link to="/recettes">Séries</Link>
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
