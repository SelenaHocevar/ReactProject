import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  // items are evenly distributed in the line; first item is on the start line, last item on the end line
  justify-content: space-between;
  margin: 0 auto;

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }
`;

export const LogoImg = styled.img`
  width: 80px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;