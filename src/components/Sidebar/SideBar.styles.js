import styled from "styled-components";

export const Wrapper = styled.div`
  //background:	#3d0c02 ;
  background-image: linear-gradient(#131313, black);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: var(--maxWidth);
  width: 350px;
  //padding: 1px 0;
  margin: 0 auto;

  h1 {
    font-size: var(--fontSuperBig);
    align-self: center;

    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }

  
  h2 {
    font-size: var(--fontBig);
    align-self: center;

    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }
`;

