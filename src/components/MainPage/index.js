import React from 'react';
import SideBar from '../Sidebar';
import HeroImage from "../HeroImage";

import {Wrapper, Content} from './MainPage.styles';

const MainPage = ({image, title, text, setSearchTerm}) => (
  <Wrapper>
    <Content>
      <HeroImage
        image = {image}
        title = {title}
        text  = {text}
      />
      <SideBar setSearchTerm = {setSearchTerm}></SideBar>
    </Content>
  </Wrapper>
);

export default MainPage; 