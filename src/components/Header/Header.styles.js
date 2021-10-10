import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //max-width: var(--maxWidth);
  //padding: 1px 0;
  margin: 0 auto;

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }
`;

export const LogoImg = styled.img`
  width: 60px;

  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 80px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;