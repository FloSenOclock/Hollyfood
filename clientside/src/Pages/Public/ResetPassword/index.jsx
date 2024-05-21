import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../../Utils/apiFetch";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {id, token} = useParams();

    const onChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await apiFetch(`reset-password/${id}/${token}`, { password: password }, 'POST');
        console.log('Réponse de l\'API :', data);
        navigate('/connexion');
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