import { useState, useEffect } from 'react';
import API from '../API';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try{
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const images = await API.fetchImages(movieId);
        console.log(images);

        setState({
          ...movie,
          posters:images.backdrops.slice(5,14),
          actors: credits.cast
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};