import React from 'react';
import {Link} from 'react-scroll'
import { ScrollButton } from '../ScrollButton/ScrollButton.styles';
import SearchBar from '../SearchBar';

import { Wrapper, Content, Text, SideBar } from './HeroImage.styles';

const HeroImage = ({image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>Find what to binge-watch next</h1>
        <p>Scroll down to browse the most popular tv shows right now</p>
        <Link to='grid' spy={true} smooth={true}><ScrollButton/></Link>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;