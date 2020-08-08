import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    min-height: 100vh;
    background: var(--primary);
  }
  *, button, input {
    border: none;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);

    transition: color .2s cubic-bezier(0.985, 0.45, 0.2, 0.185);
  }

  ul{
    list-style: none;
  }
  
  :root {
    ${(props) => {
      const theme = props.theme;

      let append = "";

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }
`;
