import {useState, useEffect, useContext} from 'react';
import apiFetch from '../../../Utils/apiFetch';
import MyState from '../MyContext';

const SearchBar = () => {

const {search, setSearch, setRecipes} = useContext(MyState) // On utilise le hook useContext pour récupérer les states de MyState

const [value, setValue] = useState('') // On crée une state qui prendra par defaut une string vide


const getRecipesList = async () => { // On crée une fonction pour utiliser l'api qui renverra nos recettes 
  try {
    const data = await apiFetch('recettes', {}, 'GET');  // On utilise la fonction apiFetch pour récupérer les recettes
    setRecipes(data.recipes); // On met à jour la state recipes avec les données récupérées

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => { // On utilise un hook useEffect pour indiqué que a chaque changement de search on lui envoie la fonction api
  if (search.trim() !== '') { // Cette fonction contient une condition ou si le champs de recherche n'est pas vide elle s'active
    getRecipesList();
  }
}, [search]); // On lui passe en paramètre search pour qu'il s'active a chaque changement de search



    const handleChange = (e) => { // On crée une fonction qui prend en paramètre un événement
      setValue(
        e.target.value)
     
    }

    const handleSubmit = async (e) => { // On crée une fonction qui prend en paramètre un événement
      e.preventDefault();
      if (!value) {
        return;
      }
      setSearch(value) // On met à jour la state search avec la valeur de value
      setValue('') // On remet la valeur de value à vide
    }
    
 
    return (
        <form  className="flex" onSubmit={handleSubmit} >
            <label htmlFor=""></label>
            <input className='rounded-lg md:px-10 lg:px-28 lg:ml-40' type="search" name="search" id="search" placeholder="Recherche par Films, Séries,..."  value={value} onChange={handleChange}/>
            <button className='hidden lg:block' type="submit">Rechercher</button>
        </form>
        )
};


export default SearchBar;




