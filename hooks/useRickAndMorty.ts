import { useEffect, useState } from 'react';

const useRickAndMorty = (page = 1) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRickAndMorty = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                if (response.status !== 200) {
                    throw new Error("Error en la petición");
                }
                const data = await response.json();
                setList(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRickAndMorty();
    }, [page]);

    return { list, loading, error };
};

export default useRickAndMorty;
