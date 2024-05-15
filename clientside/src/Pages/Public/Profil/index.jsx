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
        const url = "http://localhost:3000/api/profil";
        const token = localStorage.getItem('token');  
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();        
        setUser(data.profil);
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
    <FavCarrousel recipes={recipes} className="align-center" />
        
    </>
)
}

export default Profile;