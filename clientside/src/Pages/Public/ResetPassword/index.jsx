import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../../Utils/apiFetch";

const ResetPassword = () => {
    const [password, setPassword] = useState(''); // Initialiser le mot de passe à une chaîne de caractères vide
    const navigate = useNavigate(); // Hook de navigation
    const {id, token} = useParams(); // Récupérer les paramètres de l'URL

    const onChange = (e) => {
        setPassword(e.target.value); // Mettre à jour le mot de passe avec la valeur de l'input
    }

    const onSubmit = async (e) => { // Fonction pour envoyer le mot de passe à l'API
        e.preventDefault();
        const data = await apiFetch(`reset-password/${id}/${token}`, { password: password }, 'POST'); // Envoyer le mot de passe à l'API
        console.log('Réponse de l\'API :', data);
        navigate('/connexion'); // Naviguer vers la page de connexion
    }

    return (
        <div>
            <h2>Réinitialisation du mot de passe</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" required value={password} onChange={onChange} />
                </div>
            
                
                <button>Valider</button>                
                <br />
                <Link to="/connexion">Retour à la connexion</Link>
            </form>
        </div>
    );



}

export default ResetPassword;