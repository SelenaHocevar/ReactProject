import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import BreadCrumb from './BreadCrumb';

import Spinner from './Spinner';
import MovieInfo from './MovieInfo';

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';


const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner/>;
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.name}/>
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;