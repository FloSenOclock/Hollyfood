import {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import day from 'dayjs';
import MyState from '../MyContext';
import apiFetch from '../../../Utils/apiFetch';
import Comment from './Comment';
import {jwtDecode} from 'jwt-decode'

const AllComment = () => {
    
    const {comments, setComments, newComment, setNewComment} = useContext(MyState);
 
    
    const {slug} = useParams()

    const getUserIdFromToken = () => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.userId;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return null;
        }
    };

    const userId = getUserIdFromToken();

    const getAllComment = async () => {
        const data = await apiFetch(`recette/${encodeURIComponent(slug)}/comments`, {}, 'GET')
        setComments(data);
    }

    const addComment = async (e) => {
        e.preventDefault();

        const userId = getUserIdFromToken();
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        const commentData = { 
            description: newComment,
            user_id: userId,
        };


        try {
            const data = await apiFetch(`recette/${encodeURIComponent(slug)}/comments`, commentData , 'POST');
    
            if (data && data.id) {
                setComments(prevComments => [...prevComments, data]);
                setNewComment(''); // Clear the comment input field
            } else {
                console.error("Erreur lors de l'ajout du commentaire :", data.message);
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du commentaire :", error);
        }
    };

    const updateComment = async (commentId) => {
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        const updateCommentData = { 
            description: newComment,
        };
        console.log(updateCommentData);
        try {
            const data = await apiFetch(`recette/${encodeURIComponent(slug)}/comments/${commentId}`, updateCommentData , 'PUT');
            if (data ) {
                setComments(prevComments =>
                    prevComments.map(comment =>
                        comment.id === commentId ? { ...comment, description: newComment } : comment
                    )
                );
                setNewComment(''); // Réinitialiser la valeur de newComment
            } else {
                console.error("Erreur lors de la modification du commentaire :", "La mise à jour du commentaire a échoué.");
            }
        } catch (error) {
            console.error("Erreur lors de la modification du commentaire :", error);
        }
    };

    const deleteComment = async (commentId) => {

        const userId = getUserIdFromToken(); // Obtention de l'ID de l'utilisateur connecté
        if (!userId) {
            console.error("User not authenticated"); // Affiche une erreur si l'utilisateur n'est pas authentifié
            return; // Arrête l'exécution de la fonction
        }    


        try {
            const data = await apiFetch(`recette/${encodeURIComponent(slug)}/comments/${commentId}`, {}, 'DELETE');
            console.log(data);
            if (data && data.success) {
                // Met à jour l'état global en filtrant le commentaire supprimé
                setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));

            } else {
                console.error("Erreur lors de la suppression du commentaire :", data.message);
            }
        } catch (error) {
            console.error("Erreur lors de la suppression du commentaire :", error);
        }
    };


    useEffect(() => {
        getAllComment();
        setComments([])
    }, [slug])

    return (
        <div>
            <ul>
            {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <Comment
                            key={index}
                            description={comment.description}
                            createdAt={day(comment.createdAt).format("YYYY MM DD HH:mm:ss")}
                            onDelete={() => deleteComment(comment.id)}
                            onUpdate={() => updateComment(comment.id, newComment)}
                        />
                    ))
                ) : (
                    <p>Aucun commentaire ...</p>
                )}
            </ul>
            <div>
                {userId ? 
                    <form onSubmit={addComment}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Ajouter un commentaire"
                        required
                    ></textarea>
                    <button type="submit">Ajouter</button>
                    </form>  
                :
                    null
                }
            </div>
           
        </div>
     
    )
}

export default AllComment;