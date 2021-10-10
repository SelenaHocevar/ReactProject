import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  top: -21px;
  right: 30px;

  h1 {
    color: white;

    @media screen and (max-width:768){
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 5rem;
`;