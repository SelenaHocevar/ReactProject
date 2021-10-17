import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1520px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    // Include padding and border in the element's total width and height:
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h2 {
      font-size: 3rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }

`;