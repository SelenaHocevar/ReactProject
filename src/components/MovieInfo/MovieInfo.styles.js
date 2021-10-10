import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 40px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0,0,0,0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px){
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding-left:200px ;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    color: #fff;
    font-weight: 800;
    margin: 0;
  }

  .director {
    margin: 0 0 50px 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;