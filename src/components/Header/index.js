import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../images/potato2.png';

import {Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/ReactProject' style={{ textDecoration: 'none' }}>
        <h1>Tv Show Library</h1>
      </Link>
      <LogoImg src={logo} alt = 'tmdb-logo'/>
    </Content>
  </Wrapper>
);

export default Header;