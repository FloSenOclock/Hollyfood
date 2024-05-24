import React, { useEffect, useState } from 'react';
import FavCarrousel from "../../../Components/public/favCarrousel";
import apiFetch from '../../../Utils/apiFetch';



const Profile = () => {

    const [recipes, setRecipes] = useState([]);
  
    const getRecipes = async () => {
      try {
        const url = "http://localhost:3000/api";
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getRecipes();
    }, []);


    const [user, setUser] = useState("");
  
    const getUser = async () => {
      try {
        const data = await apiFetch('profil', {}, 'GET');        
        setUser(data.user);
        console.log(data.user);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getUser();
    }, []);





return (
    <>
    <section className='text-center my-8'>
        <h2>Profil</h2>
        <div>
            <img src={user.avatar}/>
            <p>{user.name}</p>
            <p>{user.firstname}</p> 
            <p>{user.email}</p>
        </div>
    </section>
    <FavCarrousel recipes={recipes} />
        
    </>
)
}

export default Profile;