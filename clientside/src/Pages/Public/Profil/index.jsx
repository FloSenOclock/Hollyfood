import React, { useEffect,useState,useContext} from 'react';
import FavCarrousel from "../../../Components/public/favCarrousel";
import apiFetch from '../../../Utils/apiFetch';
import MyState from '../../../Components/public/MyContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  
const {user, setUser, favorites, setFavorites, nameEdit, setNameEdit, firstnameEdit, setFirstnameEdit, updateName, setUpdateName, updateFirstname, setUpdateFirstname} = useContext(MyState)

const [nameError, setNameError] = useState("")
const [firstnameError, setFirstnameError] = useState("")

    const getUser = async () => { // Fonction pour obtenir les informations de l'utilisateur
        try {
            const data = await apiFetch('profil', {}, 'GET'); // Récupérer les informations de l'utilisateur
            setUser(data.user); // Mettre à jour les informations de l'utilisateur
        } catch (error) {
            console.error(error);
        }
    };

    // Appeler la fonction pour obtenir les informations de l'utilisateur
    useEffect(() => {
        getUser();
    }, [setUser]);

    const getFavorites = async () => { // Fonction pour obtenir les recettes favorites de l'utilisateur
        try {
            const data = await apiFetch('favorites', {}, 'GET'); // Récupérer les recettes favorites de l'utilisateur
            setFavorites(data.favoriteRecipes);
            console.log(data.favoriteRecipes); // Mettre à jour les recettes favorites
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFavorites();
    }, []); // Appeler la fonction pour obtenir les recettes favorites de l'utilisateur


    const getUpdate = async () => {
        try {

            let updatedUserData = { ...user }; // Je fais une copie de mes données d'utilisateur

            // On vérifie que le champs du nom à été modifié 
            if (updateName) { // Si c'est vrai
                updatedUserData = { ...updatedUserData, name: nameEdit }; // On met à jour la copie des données utilisateur avec le nouveau nom 
            } 

             // On vérifie que le champs du nom à été modifié 
            if (updateFirstname) {// Si c'est vrai
                updatedUserData = { ...updatedUserData, firstname: firstnameEdit }; // On met à jour la copie des données utilisateur avec le nouveau prenom
            } 

            await apiFetch('profil', updatedUserData, 'PUT'); // La requete envoie au server les données de l'utilisateur mise à jour
            setUser(updatedUserData); // On renvoie les données mises à jour dans notre contexte
            setUpdateName(false); // On remet l'etat à l'initial
            setUpdateFirstname(false);  // On remet l'etat à l'initial
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameChange = (e) => {
        setNameEdit(e.target.value); // On stock la nouvelle valeur dans la state
        setNameError("");
    };

    const handleFirstnameChange = (e) => {
        setFirstnameEdit(e.target.value); // On stock la nouvelle valeur dans la state
        setFirstnameError("");
    };

    const handleNameUpdate = () => {
        setUpdateName(true); // On demande à ce que quand on clique sur modifier cela nous affiche le champs du text et le bouton valider
    };

    const handleFirstnameUpdate = () => {
        setUpdateFirstname(true); // On demande à ce que quand on clique sur modifier cela nous affiche le champs du text et le bouton valider
    };

    const handleValidate = () => {
        if (updateName && nameEdit.trim() === "") {
            setNameError("Le champ nom ne peut pas être vide.");
        }
        if (updateFirstname && firstnameEdit.trim() === "") {
            setFirstnameError("Le champ prénom ne peut pas être vide.");
        }
        if ((updateName && nameEdit.trim() !== "") || (updateFirstname && firstnameEdit.trim() !== "")) {
            getUpdate(); 
            // On demande à ce que quand on clique sur le bouton valider celui-ci nous renvoie la donnée mise à jour sur l'affichage
        } 
    };


    return (
        <>
            <section className='flex flex-col text-center my-8'>
                <h2>Profil</h2>
                <div>
                    <img src={user.avatar} alt="Avatar"/>
                    <div className='flex justify-center gap-4'>
                    {updateName ? ( // Si update est vrai
                            //  On fait apparaitre un champs et un bouton Valider
                            <div> 
                                <input type="text" value={nameEdit} onChange={handleNameChange} required/> 
                                <button onClick={handleValidate}>Valider</button>
                                {nameError && <p>{nameError}</p>}
                            </div>
                        ) : ( // sinon
                            // on fait apparaitre le nom du profil et un bouton Modifier
                            <> 
                                <p>{user.name}</p>
                                <button onClick={handleNameUpdate}>Modifier</button>
                            </>
                        )}
                       
                    </div>
                    <div className='flex justify-center gap-4'>
                        {updateFirstname ? (  // Si update est vrai
                            // On fait apparaitre un champs et un bouton Valider
                            <div> 
                                <input type="text" value={firstnameEdit} onChange={handleFirstnameChange} required/>
                                <button onClick={handleValidate}>Valider</button>
                                {firstnameError && <p>{firstnameError}</p>}
                            </div>
                        ) : ( // sinon
                            // on fait apparaitre le prenom du profil et un bouton Modifier
                            <div  className='flex justify-center gap-4'> 
                                <p>{user.firstname}</p>
                                <button onClick={handleFirstnameUpdate}>Modifier</button>
                            </div>
                        )}
                  
                    </div>
                    <p>{user.email}</p>
                </div>

                { (user.role_id === 2) ? // Si l'utilisateur est connecter entant que admin
                <button>
                {/* // Un Bouton renvoie un lien vers la page admin */}
                <Link to="/accueil">Dashbord Admin</Link> 
                {/* Modifier la route par admin user une fois celle-ci crée*/}
                </button> 
                : // sinon
                    null // la page est rendu par default
                }

            </section>
            {/* Passer les recettes favorites à FavCarrousel */}
            <FavCarrousel favorites={favorites} />
        </>
    );

}
export default Profile;

