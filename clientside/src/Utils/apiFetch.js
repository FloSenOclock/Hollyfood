const apiFetch = async (path, body = undefined, method = 'GET') => {
  const token = localStorage.getItem('token') || null;

  // Détermine si une requête nécessite un corps de requête ou non
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  const response = await fetch( `http://localhost:3000/api/${path}`, options);

  if (!response.ok) {
    throw new Error('Erreur lors de la connexion');
  }

  return await response.json();
}

export default apiFetch;
