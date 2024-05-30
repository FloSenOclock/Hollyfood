import React, { useState, useEffect } from "react";
import apiFetch from "../../../../Utils/apiFetch";

const FavButton = ({ recipeId }) => {
    const [isFav, setIsFav] = useState(false); // vrai si la recette est dans les favoris de l'utilisateur
    const [loading, setLoading] = useState(true); // vrai si la requête est en cours
    const [error, setError] = useState(null); // message d'erreur si la requête échoue

    const token = localStorage.getItem('token'); // récupérer le token de l'utilisateur

    useEffect(() => {
        const fetchFavorites = async () => { // Fonction pour obtenir les favoris de l'utilisateur
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const data = await apiFetch('favorites', {}, 'GET'); // Récupérer les favoris de l'utilisateur
                console.log(data);
                if (data.userFavorites) {  // Vérifier si les favoris ont été récupérés
                    // console.log('Favorites data:', data.userFavorite.Recipes); // Afficher les favoris
                    // const isRecipeInFavorites = data.userFavorite.Recipes.some(recipe => recipe.id === recipeId); // Vérifier si la recette est dans les favoris
                    // setIsFav(isRecipeInFavorites); // Mettre à jour l'état isFav
                    // console.log(data.userFavorites);
                    console.log(data.userFavorites);
                } else {
                    throw new Error('Failed to fetch favorites');
                }
            } catch (error) {
                console.error('Error fetching favorites:', error);
                setError(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites(); // Appeler la fonction pour obtenir les favoris de l'utilisateur

        // Cleanup function to reset state when the component unmounts or token changes
        return () => {  // Fonction de nettoyage pour réinitialiser l'état lorsque le composant est démonté ou que le token change
            setIsFav(false);
            setLoading(true);
            setError(null);
        };
    }, [recipeId, token]); // Déclencher l'effet lorsque recipeId ou token change

    // Fonction pour ajouter ou retirer une recette des favoris de l'utilisateur
    const handleFav = async () => {
        if (!token) { // Vérifier si l'utilisateur est connecté
            alert("Veuillez vous connecter ou vous inscrire pour ajouter aux favoris");
            return;
        }

        try {
            const handleMethod = isFav ? 'DELETE' : 'POST'; // Déterminer la méthode en fonction de l'état actuel
            const response = await apiFetch(`favorites`, {recipe_id: recipeId }, handleMethod) // Envoyer une requête pour ajouter ou retirer la recette des favoris
            if (response.ok) {  // Vérifier si la requête a réussi
                setIsFav(!isFav); // Mettre à jour l'état isFav
            } else {
                throw new Error(`Failed to ${isFav ? 'remove from' : 'add to'} favorites`); // Afficher un message d'erreur
            }
        } catch (error) {
            console.error('Error updating favorite:', error);
            setError(error.message || 'Something went wrong');
        }
    };

    if (loading) return <p>Loading...</p>; // Afficher un message de chargement
    if (error) return <p>{error}</p>; // Afficher un message d'erreur

    return (
        <button onClick={handleFav}>  
            {isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
        </button>
    );
};

export default FavButton;
