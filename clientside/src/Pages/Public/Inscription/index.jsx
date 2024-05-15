import { Link } from "react-router-dom";
import Subform from "../../../Components/public/subForm"

const Subscribe = () => {
    return (
        <>
        <fieldset>
            <legend>Inscription</legend>
            <p>Les champs avec * sont obligatoires</p>
            < Subform />
        </fieldset>
        <p>Déjà membre ? Cliquez <Link to="/connexion">ici</Link></p>
        </>
    )
};

export default Subscribe;

