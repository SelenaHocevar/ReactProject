import styled from "styled-components";

export const Wrapper = styled.button`
  // Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
  display: block;
  background: var(--darkGrey);
  width: 20%;
  min-width: 200px;
  height: 60px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;