import React, { useEffect, useState, useContext } from "react";
import FavCarrousel from "../../../Components/public/favCarrousel";
import apiFetch from "../../../Utils/apiFetch";
import MyState from "../../../Components/public/MyContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const {
    user,
    setUser,
    favorites,
    setFavorites,
    nameEdit,
    setNameEdit,
    firstnameEdit,
    setFirstnameEdit,
    updateName,
    setUpdateName,
    updateFirstname,
    setUpdateFirstname,
  } = useContext(MyState);

  const [nameError, setNameError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const slider3 = React.createRef();

  const getUser = async () => {
    // Fonction pour obtenir les informations de l'utilisateur
    try {
      const data = await apiFetch("profil", {}, "GET"); // Récupérer les informations de l'utilisateur
      setUser(data.user); // Mettre à jour les informations de l'utilisateur
    } catch (error) {
      console.error(error);
    }
  };

  // Appeler la fonction pour obtenir les informations de l'utilisateur
  useEffect(() => {
    getUser();
  }, [setUser]);

  const getFavorites = async () => {
    // Fonction pour obtenir les recettes favorites de l'utilisateur
    try {
      const data = await apiFetch("favorites", {}, "GET"); // Récupérer les recettes favorites de l'utilisateur
      setFavorites(data.favoriteRecipes);// Mettre à jour les recettes favorites
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
      if (updateName) {
        // Si c'est vrai
        updatedUserData = { ...updatedUserData, name: nameEdit }; // On met à jour la copie des données utilisateur avec le nouveau nom
      }

      // On vérifie que le champs du nom à été modifié
      if (updateFirstname) {
        // Si c'est vrai
        updatedUserData = { ...updatedUserData, firstname: firstnameEdit }; // On met à jour la copie des données utilisateur avec le nouveau prenom
      }

      await apiFetch("profil", updatedUserData, "PUT"); // La requete envoie au server les données de l'utilisateur mise à jour
      setUser(updatedUserData); // On renvoie les données mises à jour dans notre contexte
      setUpdateName(false); // On remet l'etat à l'initial
      setUpdateFirstname(false); // On remet l'etat à l'initial
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
    if (
      (updateName && nameEdit.trim() !== "") ||
      (updateFirstname && firstnameEdit.trim() !== "")
    ) {
      getUpdate();
      // On demande à ce que quand on clique sur le bouton valider celui-ci nous renvoie la donnée mise à jour sur l'affichage
    }
  };

  return (
    <main>
      <section className="flex flex-col text-center mb-8 ">
        <h2 className="text-lg font-medium my-8 underline underline-offset-4">
          Profil
        </h2>
        <div>
          <div className="flex justify-center gap-4">
            {updateName ? ( // Si update est vrai
              //  On fait apparaitre un champs et un bouton Valider
              <div>
                <input
                  className="bg-yellow-50 rounded-lg border-2 border-yellow-400"
                  type="text"
                  value={nameEdit}
                  onChange={handleNameChange}
                  required
                />
                <button
                  className="my-4 bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400"
                  onClick={handleValidate}
                >
                  Valider
                </button>
                {nameError && <p>{nameError}</p>}
              </div>
            ) : (
              // sinon
              // on fait apparaitre le nom du profil et un bouton Modifier
              <>
                <p className="text-base font-semibold">
                  <span className="text-base font-semibold">Nom : </span>
                  {user.name}
                </p>
                <button onClick={handleNameUpdate}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 hover:text-yellow-400"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </button>
              </>
            )}
          </div>
          <div className="flex justify-center gap-4">
            {updateFirstname ? ( // Si update est vrai
              // On fait apparaitre un champs et un bouton Valider
              <div>
                <input
                  className="bg-yellow-50 rounded-lg border-2 border-yellow-400"
                  type="text"
                  value={firstnameEdit}
                  onChange={handleFirstnameChange}
                  required
                />
                <button
                  className="my-4 bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400"
                  onClick={handleValidate}
                >
                  Valider
                </button>
                {firstnameError && <p>{firstnameError}</p>}
              </div>
            ) : (
              // sinon
              // on fait apparaitre le prenom du profil et un bouton Modifier
              <div className="flex justify-center gap-4 my-2">
                <p className="text-base font-semibold">
                  <span className="text-base font-semibold">Prénom : </span>
                  {user.firstname}
                </p>
                <button onClick={handleFirstnameUpdate}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 hover:text-yellow-400"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <p className="text-base font-semibold">
            <span className="text-base font-semibold">Adresse e-mail : </span>
            {user.email}
          </p>
        </div>

        {
          user.role_id === 2 ? ( // Si l'utilisateur est connecter entant que admin
            <button className="my-4 bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400">
              {/* // Un Bouton renvoie un lien vers la page admin */}
              <Link to="/accueil">Dashbord Admin</Link>
              {/* Modifier la route par admin user une fois celle-ci crée*/}
            </button>
          ) : // sinon
          null // la page est rendu par default
        }
      </section>
      <hr className="h-px my-4 bg-yellow-400 border-0"/>
      {/* Passer les recettes favorites à FavCarrousel */}
      <section className="flex flex-col justify-center">
      <h3 className='text-center font-semibold underline underline-offset-4 mb-4'>Mes recettes préférées</h3>
      <FavCarrousel  slider={slider3} favorites={favorites} />
      <div className="z-100 flex justify-center my-8">
            <div className="mx-2">
              <button
                className="bg-yellow-400 rounded-full hover:scale-110 p-1 shadow-lg shadow-yellow-600"
                onClick={() => slider3?.current?.slickPrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                </svg>
              </button>
            </div>
            <div className="mx-2">
              <button
                className="bg-yellow-400 rounded-full hover:scale-110 p-1 shadow-lg shadow-yellow-600"
                onClick={() => slider3?.current?.slickNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </button>
            </div>
      </div>
      </section>
    </main>
  );
};
export default Profile;
