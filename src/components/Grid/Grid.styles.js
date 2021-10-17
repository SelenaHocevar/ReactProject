import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  /* An element with position: relative; is positioned relative to its normal position.
     Setting the top, right, bottom, and left properties of a relatively-positioned element 
     will cause it to be adjusted away from its normal position. Other content will not be 
     adjusted to fit into any gap left by the element. */
  position: relative;
  top: -21px;
  right: 30px;

  h1 {
    color: white;

    /* On screens that are 768px or less, set the font-size */
    @media screen and (max-width:768){
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  /*  */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 5rem;
`;