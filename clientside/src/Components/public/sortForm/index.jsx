import apiFetch from "../../../Utils/apiFetch";
import { useContext, useEffect} from 'react'
import MyState from "../MyContext";

const SortForm = () => {

const { setRecipes, checked, setChecked} = useContext(MyState)



const getRecipesList = async () => { // On crée une fonction pour utiliser l'api qui renverra nos recettes 
    try {
      const data = await apiFetch('recettes', {}, 'GET'); 
      setRecipes(data.recipes);
  
    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
    getRecipesList()
}, [])


const handleCheckboxChange = (e) => {

    const { name, checked } = e.target;
    setChecked(prevChecked => ({
        ...prevChecked,
        [name]: checked
    }));
};

    return (
        <div>
                    <section>
                <form >
                    <div>
                        <label><input type="checkbox" name="serie" checked={checked.serie}  onChange= {handleCheckboxChange} /> serie</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" name="film" checked={checked.film} onChange={handleCheckboxChange} />film</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" name="salé" checked={checked.salé} onChange={handleCheckboxChange} />salé</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" name="sucré" checked={checked.sucré} onChange={handleCheckboxChange} />sucré</label>                        
                    </div>
                    <button type="submit">Trier</button>
                    <button>Plus de critères</button>
                </form>
            </section>
        </div>
    )

};

export default SortForm;