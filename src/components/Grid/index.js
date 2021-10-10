import React, { Children } from "react";

//Styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1 id='grid'>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;