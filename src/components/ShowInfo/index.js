
import React from "react";
// Components
import Thumb from '../Thumb';
import ShowPicture from "../ShowPictures";
import Grid from "../Grid";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './ShowInfo.styles';

const ShowInfo = ({ tvShow }) => (
  <Wrapper backdrop={tvShow.backdrop_path}>
    <Content>
      <Thumb id='movie-thumb'
        image={
          tvShow.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvShow.poster_path}`
            : NoImage
        }
        clickable={false}
        alt='tvShow-thumb'
      />
      <Text>
        <h1>{tvShow.title}</h1>
        <h3>PLOT</h3>
        <p>{tvShow.overview}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{tvShow.vote_average}</div>
          </div>
          <div className='director'>
            <h3>ACTOR{tvShow.actors.length > 1 ? 'S' : ''}</h3>
            {tvShow.actors.map(director => (
              <text key={director.credit_id}>{director.name + ', '}</text>
            ))}
          </div>  
        </div>

        <Grid header='Pictures'>
        {tvShow.posters.map(actor => (
          <ShowPicture
            imageUrl={
              actor.file_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.file_path}`
                : NoImage
            }
          />
        ))}
        </Grid>
      </Text>
      
    </Content>
  </Wrapper>
);

export default ShowInfo;