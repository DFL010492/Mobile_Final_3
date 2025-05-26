import { useState, useEffect } from 'react';

// Use quando usar no modo WEB mas precisa acessar https://cors-anywhere.herokuapp.com/corsdemo e clicar no 'Request temporary access to the demo server' para liberar o acesso
// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/eb0e3fae3b9e93fe756478a979364214';


// URL da API do Super-Herói use quando usar mobile
const BASE_URL = 'https://superheroapi.com/api/eb0e3fae3b9e93fe756478a979364214';

export default function useSuperheroApi(searchName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchName) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(null); // reseta dados antigos

        const res = await fetch(`${BASE_URL}/search/${searchName}`, { signal });
        const json = await res.json();

        if (json.response === 'error') {
          throw new Error(json.error);
        }

        setData(json.results);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Erro ao buscar personagem.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Limpa a requisição anterior se o searchName mudar
    return () => controller.abort();
  }, [searchName]);

  return { data, loading, error };
}
