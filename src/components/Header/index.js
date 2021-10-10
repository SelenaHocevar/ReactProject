import React from "react";
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/potato2.png';
import TMDBLogo from '../../images/potato2.png';

import {Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>Tv Show Library</h1>
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt = 'tmdb-logo'/>
    </Content>
  </Wrapper>
);

export default Header;