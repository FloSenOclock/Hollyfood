import { Link } from "react-router-dom"

const SiteMap = () => {
    return (
        <div className="SiteMap">
            <h3>Plan du Site</h3>
            <ul>
                <li>
                    <Link to="/accueil">Accueil</Link>
                </li>
                <li>
                    <Link to="/recettes">Recettes</Link>
                </li>
                <li>
                    <Link to="/a-propos">À Propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/connexion">Connexion</Link>
                </li>
                <li>
                    <Link to="/inscription">Inscription</Link>
                </li>
                <li>
                    <Link to="/profil">Profil</Link>
                </li>
                <li>
                    <Link to="/mentions-legales">Mentions légales</Link>
                </li>
            </ul>
        </div>
    );
}

export default SiteMap;
