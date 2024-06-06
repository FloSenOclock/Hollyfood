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
            <section>
                <form className="flex justify-center my-4 font-medium text-lg">
                    <div>
                        <label><input className="accent-yellow-400" type="checkbox" name="serie" checked={checked.serie}  onChange= {handleCheckboxChange} /> Série</label>                        
                    </div>
                    <div>
                        <label><input className="accent-yellow-400" type="checkbox" name="film" checked={checked.film} onChange={handleCheckboxChange} />Film</label>                        
                    </div>
                    <div>
                        <label><input className="accent-yellow-400" type="checkbox" name="salé" checked={checked.salé} onChange={handleCheckboxChange} />Salé</label>                        
                    </div>
                    <div>
                        <label><input className="accent-yellow-400" type="checkbox" name="sucré" checked={checked.sucré} onChange={handleCheckboxChange} />Sucré</label>                        
                    </div>
                </form>
            </section>
    )

};

export default SortForm;