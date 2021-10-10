import React from "react";

//Styles
import { Wrapper, Image } from './ShowPictures.styles';

const ShowPictures = ({ key, name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
  </Wrapper>
);

export default ShowPictures;