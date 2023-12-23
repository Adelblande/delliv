import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;

    --gray-100: #eaeaea;
    --gray-200: #e1e1e6;
    --gray-300: #c3c3c3;
    --gray-400: #6f6f6f;

    --blue-100: #a3a3c3;

    --purple-400: #7149c1;
    --purple-500: #7149d6;

    --pink-500: #D946EF;

    --cyan-500: #00cdcd;

    --red-500: #ff0000;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: Roboto;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
  }

  a {
    text-decoration: none;
  }

`;
