import styled from "styled-components";

export const ScrollButton = styled.div`
  border-left: 5px solid var(--lightGrey);
  border-bottom: 5px solid var(--lightGrey);
  width: 50px;
  height: 50px;
  margin: 20px auto;
  animation: translate 0.8s linear infinite;

  @keyframes translate {
    0% {
      transform: translate(500px,0px) rotate(-45deg);
    }
    100% {
      transform: translate(500px,20px) rotate(-45deg);
    }
  }
`;