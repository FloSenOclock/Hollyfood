const AdminUser = () => {
    return (
        <div className="gestion-utilisateurs">
            <h3>Gestion Utilisateurs</h3>
{/* Boutons d'accès aux Pages gestion de Recettes ou Utilisateurs */}
                <div className="admin-buttons">
                    <a href="../AdminRecipe">Recettes</a>
                    <a href="AdminUser">Utilisateurs</a>
                </div>
{/* Bouton qui ouvre le formulaire d'ajout d'utilisateur + Formulaire */}
        <button>Ajouter un utilisateur</button>
            <div className="add-user-form">
                <form>
                    <div> 
                        <label>Nom:</label>
                     <input type="text" required />
                     </div>
                     <div>
                        <label>Prénom:</label>
                     <input type="text" required />
                     </div>
                     <div>
                        <label>Email:</label>
                     <input type="email" required />
                     </div>
                     <div>
                        <label>Mot de passe:</label>
                        <input type="password" required />
                     </div>
                     <div>
                     <label>Rôle:</label>
                     <select required>
                        <option value="membre">Membre</option>
                        <option value="administrateur">Administrateur</option>
                     </select>
                     </div>
                   <button type="submit">Créer</button>
                </form>
            </div>
{/* Barre de Recherche */}
        <div className="user-search-bar">
            <input type="text " placeholder="Rechercher un utilisateur..."/>
        </div>
{/* Liste des utilisateurs (tableau) */}
        <table className="user-list">
            <thead>
                <tr>
                    <th>Nom:</th>
                    <th>Prénom:</th>
                    <th>Mail:</th>
                    <th>Rôle:</th>
                    <th>Actions</th>
                </tr>
            </thead>
                    <tbody>
                        <tr>
                            <td>User1</td>
                            <td>User1</td>
                            <td>user1@user1.com</td>
                            <td>Administrateur</td>
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                        </tr>
                        <tr>
                            <td>User2</td>
                            <td>User2</td>
                            <td>user2@user2.com</td>
                            <td>Membre</td>
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                            </tr>
                    </tbody>
            </table>
        </div>
    );
}

export default AdminUser;
