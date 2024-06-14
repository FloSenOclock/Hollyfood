import React, { useState, useEffect, useContext } from 'react';
import apiFetch from '../../../Utils/apiFetch';
import MyState from '../../../Components/public/MyContext';
import ASearchBar from '../../../Components/admin/AsearchBar';
import RecipeHeader from '../../../Components/admin/AHeader/RecipeHeader';
const ManageIngredient = () => {

  const {searchAdmin} = useContext(MyState);
  const [works, setWorks] = useState([]);
  const [filteredWork, setFilteredWork] = useState([]);
  const [addTitle, setAddTitle] = useState("");
  const [addSynopsis, setAddSynopsis] = useState("");
  const [editTitle, setEditTitle] = useState('');
  const [editSynopsis, setEditSynonpsis] = useState('');
  const [editUpdate, setEditUpdate] = useState(null)
  const [editWorkError, setEditWorkError] = useState("");

  useEffect(() => {
    const fetchWorks = async () => {
      const data = await apiFetch('admin/work');
      const sortedWorks = data.works.sort((a, b) => a.id - b.id);
      setWorks(sortedWorks);
      setFilteredWork(sortedWorks);
    };
    fetchWorks();
  }, []);


  useEffect(() => {
    if (searchAdmin.trim() === '') {
        setFilteredWork(works);
    } else {
        console.log(searchAdmin);
        const newList = works.filter(work =>
            work.name.toLowerCase().includes(searchAdmin.toLowerCase()));
        setFilteredWork(newList);
        console.log(newList);
    }
}, [searchAdmin, works]);

  const createIngredient = async (e) => {
    e.preventDefault();
    if (addTitle.trim() === "" || addSynopsis.trim() === "") {
      setEditWorkError("Le nom est requis");
      return;
    }
    try {
      const newWork = await apiFetch('admin/ingredient', { name: addTitle, synopsis: addSynopsis }, 'POST');
      setWorks([...works, newWork]);
      setAddTitle('');
      setAddSynopsis('');
      setEditTitleError('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (workId) => {

    const updatedWorks = { 
      title: editTitle,
      synopsis: editSynopsis 
    };
    
    try {
     
      const data =await apiFetch(`admin/work/${workId}`, updatedWorks, 'PUT');
      if (data) {
        setWorks(prevWorks =>
          prevWorks.map(work =>
              work.id === workId ? {
                  ...work,
                  title: editTitle,
                  synopsis: editSynopsis
              }
                  :
                  work
        ));
        setFilteredWork(prevWorks =>
          prevWorks.map(work =>
              work.id === workId ? {
                  ...work,
                  title: editTitle,
                  synopsis: editSynopsis
              }
                  :
                  work
        ));
        setEditUpdate(null);
      } else {
        console.error("Erreur lors de la modification du commentaire :", "La mise à jour du commentaire a échoué.");
    }
    } catch (error) {
      console.error(error);
    }
  };

  const showUpdate = (work) => {
    setEditUpdate(work.id);
    setEditTitle(work.title);
    setEditSynonpsis(work.synopsis);
}

  const handleCancel = () => {
    setEditUpdate(false)
  }

  const handleDelete = async (workId) => {
    try {
      const data = await apiFetch(`admin/work/${workId}`, {}, 'DELETE');
      if (data && data.success) {
        setWorks(prevWorks => prevWorks.filter(work => work.id !== workId));
        setFilteredWork(filteredWork.filter(work => work.id !== workId));
    } else {
        console.error("Erreur lors de la suppression de l'utilisateur :", data.message);
    }
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <main className="mr-10 ml-10 mb-10">
    <div className='flex-col'>
      <RecipeHeader/> 
        <ASearchBar />
        <h2 className='bg-black text-yellow-400 font-bold mt-8 pl-10 px-4 py-2 rounded'>LISTE DES OEUVRES</h2>
        <table className="min-w-full mt-4 bg-white border border-gray-200 rounded-md shadow-md">
            <thead className='bg-gray-200'>
                <tr>
                    <th className="px-4 py-2 text-center">ID</th>
                    <th className="px-4 py-2 text-center">Nom</th>
                    <th className="px-4 py-2 text-center">Synopsis</th>
                    <th className="px-4 py-2 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredWork.map(work => (
                    <tr key={work.id} className="border-t border-gray-200">
                        {editUpdate === work.id ?
                            <>
                                <td className="px-4 py-2 text-center">{work.id}</td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="border border-gray-300 rounded p-1"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editSynopsis}
                                        onChange={(e) => setEditSynonpsis(e.target.value)}
                                        className="border border-gray-300 rounded p-1"
                                    />
                                </td>
                                <td className="px-4 py-2 flex justify-center space-x-2">
                                    <button
                                        className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300'
                                        onClick={() => handleUpdate(work.id)}
                                    >
                                        Enregistrer
                                    </button>
                                    <button
                                        className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300'
                                        onClick={handleCancel}
                                    >
                                        Annuler
                                    </button>
                                </td>
                            </>
                            :
                            <>
                                <td className="px-4 py-2 text-center">{work.id}</td>
                                <td className="px-4 py-2 text-center">{work.title}</td>
                                <td className="px-4 py-2 text-center">{work.synopsis}</td>
                                <td className="px-4 py-2 flex justify-center space-x-2">
                                    <button
                                        className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-300'
                                        onClick={() => showUpdate(work)}
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300'
                                        onClick={() => handleDelete(work.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </>
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</main>
);
};

export default ManageIngredient;
