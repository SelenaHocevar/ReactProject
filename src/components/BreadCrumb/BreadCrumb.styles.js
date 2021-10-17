import styled from "styled-components";

export const Wrapper = styled.div`
  /* This defines a flex container; inline or block depending on the given value. 
     It enables a flex context for all its direct children. */
  display: flex;
  /* This defines the default behavior for how flex items are laid 
     out along the cross axis on the current line. */
  align-items: center;
  /* This defines the alignment along the main axis. 
     It helps distribute extra free space leftover when either all the flex items 
     on a line are inflexible, or are flexible but have reached their maximum size.  */
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px){
      font-size: var(--fontSmall);
    }
  }
`;