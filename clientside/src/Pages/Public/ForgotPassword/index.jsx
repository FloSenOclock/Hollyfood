import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiFetch from "../../../Utils/apiFetch";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await apiFetch('forgot-password', { email: email }, 'POST');
        console.log('Réponse de l\'API :', data);
        
        // Vérifier si la réponse contient un message d'erreur
        if (data && data.message) {
            alert(data.message); // Afficher le message d'erreur à l'utilisateur
        } else {
            // Si aucune erreur, naviguer vers la page de connexion
            navigate('/connexion');
        }
    }
    

    return (
        <div>
            <h2>Mot de passe oublié</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required value={email} onChange={onChange} />
                </div>
              
               
                <button>Valider</button>
                <br />
                <Link to="/connexion">Retour à la connexion</Link>
            </form>
        </div>
    );
}

export default ForgotPassword;