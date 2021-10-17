import { useState, useEffect } from 'react';
import API from '../API';

export const useShowFetch = showId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try{
        setLoading(true);
        setError(false);

        const tvShow = await API.fetchShow(showId);
        const credits = await API.fetchCredits(showId);
        const images = await API.fetchImages(showId);
        console.log(images);

        setState({
          ...tvShow,
          posters:images.backdrops.slice(5,14),
          actors: credits.cast
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchShow();
  }, [showId]);

  return { state, loading, error };
};