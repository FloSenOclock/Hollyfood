import {useState, useEffect} from 'react';
import apiFetch from '../../../Utils/apiFetch';


const SearchBar = ({search, setSearch, setRecipesList }) => {


const [value, setValue] = useState('') // On crée une state qui prendra par defaut une string vide


const getRecipesList = async () => { // On crée une fonction pour utiliser l'api qui renverra nos recettes 
  try {
    const data = await apiFetch('recettes', {}, 'GET'); 
    setRecipesList(data.recipes);

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => { // On utilise un hook useEffect pour indiqué que a chaque changement de search on lui envoie la fonction api
  if (search.trim() !== '') { // Cette fonction contient une condition ou si le champs de recherche n'est pas vide elle s'active
    getRecipesList();
  }
}, [search]);



    const handleChange = (e) => {
      setValue(
        e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSearch(value)
      setValue('')
    }
    
 
    return (
        <form className="" onSubmit={handleSubmit} >
            <label htmlFor=""></label>
            <input type="search" name="search" id="search" placeholder="Recherche par Films, Séries,..."  value={value} onChange={handleChange}/>
            <button type="submit">Rechercher</button>
        </form>
        )
};


export default SearchBar;




