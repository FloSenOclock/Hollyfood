import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apiFetch from '../../../Utils/apiFetch';

const ConnectForm = () => {

const navigate = useNavigate();   

 // mise en place des useState sous forme d'objet pour factoriser
 const [credentials, setCredentials] = useState({
    email:'',
    password:''
});


// fusion des target.name et target.value car les values sont dans un objet
const onChange = (e) => {
    setCredentials({
        ...credentials,     // ancien état du state
        [e.target.name]: e.target.value     // la valeur name de l'input (email, password ...) contient désormais le target value
    })
};

const onSubmit = async (e) => {
    e.preventDefault();

    const data = await apiFetch('connexion', credentials, 'POST')
    localStorage.setItem('token', data.token)

    try {
            console.log('Réponse de l\'API :', data);
            navigate('/accueil');
          } catch (error) {
            // Gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
            console.error('Erreur lors de la connexion :', error);    
    } 
};

return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" required value={credentials.email} onChange={onChange}/>
     
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" required value={credentials.password} onChange={onChange}/>
        
            </div>
            <div>
            <Link to="/mdp-oublie">Mot de passe oublié ?</Link>
            </div>
            <button>Valider</button>
        </form>
    </div>
    );
};

export default ConnectForm;