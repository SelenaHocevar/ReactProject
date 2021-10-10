import {useState, useEffect} from 'react';

// API
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchTvShows = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      
      if(searchTerm == 'Top-Rated')
        var shows = await API.fetchTopRatedTvShows(searchTerm, page);
      else if (searchTerm == 'Airing-Today')
        var shows = await API.fetchAiringToday(searchTerm, page);
      else if (searchTerm == 'Trending-Today')
        var shows = await API.fetchTrendingToday(searchTerm, page);
      else if (searchTerm == 'Trending-Weekly')
        var shows = await API.fetchTrendingWeekly(searchTerm, page);
      else if (searchTerm == 'Most-Popular')
        var shows = await API.fetchTvShows('',page);
      else
        var shows = await API.fetchTvShows(searchTerm,page);    
            
      setState(prev => ({
        ...shows,
        results:
          page > 1 ? [...prev.results, ...shows.results] : [...shows.results]
      }));

    } catch (error){
      setError(true);
    }

    setLoading(false);
  };

  // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {
    setState(initialState);
    fetchTvShows(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchTvShows(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
};
  