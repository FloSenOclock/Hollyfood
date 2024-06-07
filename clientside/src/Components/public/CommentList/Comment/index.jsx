import { useState,useContext } from 'react';
import MyState from '../../MyContext';

const isAuthenticated = () => { // Vérifier si l'utilisateur est connecté
    const token = localStorage.getItem('token');
    return !!token;
  };


const Comment = ({ commentId, description, createdAt, onDelete, onUpdate }) => {


    const {newComment, setNewComment} = useContext(MyState)
    const [editMode, setEditMode] = useState(false);
    // const [editedComment, setEditedComment] = useState(newComment);

    const handleUpdate = () => {
        onUpdate(commentId, newComment);
        setEditMode(false); // Sortir du mode édition après la mise à jour
    };

    const handleDelete = () => {
        onDelete(commentId);
    };

    return (
        <li>
            {isAuthenticated() ?
            <div>
                {editMode ? (
                        <div>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                autoFocus // Mettre le focus sur le champ d'édition
                            ></textarea>
                            <button type="submit" onClick={handleUpdate}>Enregistrer</button>
                        </div>
                    ) : (
                        <div>
                            <p className="mr-4">{description}</p>
                            <p>{createdAt}</p>
                            <button  onClick={() => setEditMode(true)}>Modifier</button>
                            <button onClick={handleDelete}>Supprimer</button>
                        </div>
                
                    )}
            </div>
            
            :
            <div>
                <p className="mr-4">{description}</p>
                <p>{createdAt}</p>
            </div>
          
            }
           
        </li>
    );
};

export default Comment;