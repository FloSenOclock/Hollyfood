const apiFetch = async (path, body= {}, method = 'GET') => {

    const token =   localStorage.getItem('token') || null;

    const response = await fetch(`http://localhost:3000/api/${path}`, { 
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la connexion');
      }

      return  await response.json();
}

export default apiFetch;