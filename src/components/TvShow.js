import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import BreadCrumb from './BreadCrumb';

import Spinner from './Spinner';
import ShowInfo from './ShowInfo';

//Hook
import { useShowFetch } from '../hooks/useShowFetch';


const TvShow = () => {
  const { tvShowId } = useParams();

  const { state: tvShow, loading, error } = useShowFetch(tvShowId);

  if (loading) return <Spinner/>;
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={tvShow.name}/>
      <ShowInfo tvShow={tvShow} />
    </>
  );
};

export default TvShow;