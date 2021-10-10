import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import Grid from './Grid';
import Thumb from "./Thumb";
import Spinner from './Spinner';
import Button from "./Button";
import MainPage from "./MainPage";

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';



const Home = () => {
  const { 
    state, 
    loading, 
    error, 
    searchTerm, 
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

  console.log(state);

  return (
    <>
    {state.results[0] ? (
      <MainPage
        image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title = {state.results[0].name}
        text  = {state.results[0].overview}
        setSearchTerm = {setSearchTerm}
      />
    ) : null}
    <Grid header={searchTerm ? 'Search Result' : 'Popular TV Shows'}>
      {state.results.map(movie => (
        <Thumb
          key={movie.id}
          clickable
          image={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImage
          }
          movieId={movie.id}
        />
      ))}
    </Grid>
    {loading && <Spinner/>}
    {state.page < state.total_pages && !loading && (
      <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
    )}
    </>
  );
};

export default Home;