import { useState,useContext } from 'react';
import MyState from '../../MyContext';

const isAuthenticated = () => { // Vérifier si l'utilisateur est connecté
    const token = localStorage.getItem('token');
    return !!token;
  };


const Comment = ({ commentId, description, createdAt, onDelete, onUpdate }) => {


    const {newComment, setNewComment} = useContext(MyState)
    const [editMode, setEditMode] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false)
   
   

    const handleUpdate = () => {
        onUpdate(commentId, newComment);
        setEditMode(false); // Sortir du mode édition après la mise à jour
        setIsSubstring(false)
    };

    const handleDelete = () => {
        onDelete(commentId);
    };

    const handleCancel = () => {
        setEditMode(false)
    }

    const toggleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    const shouldTruncate = description.length > 50;

    return (
    <li className='flex flex-col items-center mb-4 w-full'>
        {isAuthenticated() ?
            <>
                {editMode ? (
                    <>
                        <textarea
                        className='border-4 border-yellow-400 bg-slate-50 rounded-lg w-5/6 md:w-5/6 p-2 mb-4'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}                    
                        rows={4}
                        >                   
                        </textarea>
                        <div className='md:ml-4 md:flex'>
                            <button className='bg-yellow-400 px-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400 m-1 ' type="submit" onClick={handleUpdate}>Enregistrer</button>
                            <button className='bg-yellow-400 px-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400 m-1 ' onClick={handleCancel}>Annuler</button>
                        </div>   
                    </>
                    ) : (
                    <div className='flex flex-col items-center w-full md:w-2/3 md:flex md:flex-row md:justify-center '>
                        <div className="items-end border-4 border-black-400 bg-slate-50 text-start rounded-lg p-2 w-1/2 break-words ">
                            {shouldTruncate ? (
                            <div className='md:flex md:flex-col'>
                                <p className='ml-2 '> {isShowMore ? description : `${description.substring(0, 50)} ...`}</p>
                                <div className='flex justify-between mt-4 pt-1 border-t-2'>
                                    <button className='text-sm underline' onClick={toggleShowMore}> {isShowMore ? 'Afficher moins' : 'Afficher plus'}</button>
                                    <span className='text-sm italic text-right'>{createdAt}</span>
                                </div>
                        </div>
                            ) : (
                        <div className='flex flex-col'>
                            <p className='ml-2 md:ml-0'>{description}</p>
                            <span className='text-sm italic text-right mt-4 pt-1 border-t-2'>{createdAt}</span>
                        </div>
                        )}
                        </div>
                        <div className='flex items-center md:mx-2'>
                            <button className='bg-yellow-400  m-1 px-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400'  onClick={() => setEditMode(true)}>Modifier</button>
                            <button className='bg-yellow-400   px-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400' onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                )}
            </>

        :
            <div className='flex flex-col items-center w-full md:w-2/3 md:flex md:flex-row md:justify-center '>
                <div className="items-end border-4 border-black-400 bg-slate-50 text-start rounded-lg p-2 w-1/2 break-words ">
                    {shouldTruncate ? (
                    <div className='md:flex md:flex-col'>
                        <p className='ml-2 '> {isShowMore ? description : `${description.substring(0, 50)} ...`}</p>
                        <div className='flex justify-between mt-4 pt-1 border-t-2'>
                            <button className='text-sm underline' onClick={toggleShowMore}> {isShowMore ? 'Afficher moins' : 'Afficher plus'}</button>
                            <span className='text-sm italic text-right'>{createdAt}</span>
                        </div>
                </div>
                    ) : (
                <div className='flex flex-col'>
                    <p className='ml-2 md:ml-0'>{description}</p>
                    <span className='text-sm italic text-right mt-4 pt-1 border-t-2'>{createdAt}</span>
                </div>
                )}
                </div>
            </div>
        }
    </li>
    );
};

export default Comment;