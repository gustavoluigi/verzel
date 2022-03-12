import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.body};
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.text.title};
  }

  svg {
    * {
      transition: all .2s ease-in-out;
    }
  }

  a {
    text-decoration: none;
  }


`;
