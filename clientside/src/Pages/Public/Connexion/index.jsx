import { Link } from "react-router-dom";
import ConnectForm from "../../../Components/public/connectForm"

const Connect = () => {
    return (
        <>
        <fieldset>
            <legend>Connexion</legend>
            < ConnectForm />
        </fieldset>
        <p>Pas encore inscrit ? Inscrivez-vous en cliquant <Link to="/inscription">ici</Link></p>
        </>
    )
};

export default Connect;