import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="text-center bg-slate-300">
                <Link to="/contact">Nous contacter - </Link>
                <Link to="/plandusite">Plan du site - </Link>
                <Link to="/a-propos">A propos de nous - </Link>
                <Link to="/mentions-legales">Mentions légales</Link>
            </div>
        </footer>
    );
}

export default Footer;