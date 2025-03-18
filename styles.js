import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }


  :root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  --red: #ff0000;
  --white: #ffffff;
  --black: #000;
  --lightgray: #8c8080;
  --lightgray-100:#6f6c69;
  --darkgray:#4f4949;
  --beige: #f5f5dc;
  --lightpink: #ffc0cb;
  
  
  --bgBody: var(--lightgray);
  --bgHeader: var(--darkgray);
  --headerColor: var(--beige);
  --collectionName: var(--beige);
  --bgCardColorName: var(--lightpink);
  --borderCard: var(--darkbrown);
  --bgForm: var(--lightgray-100);
  --bgFormBorder: var(--darkgray);
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

body {
  background-color: var(--bgBody);
  display: grid;
  justify-content: center;
  color: var(--black); /* default color */
}
header {
  background-color: var(--bgHeader);
  margin-bottom: 1rem
}
h1 {
  font-size: 3.2em;
  text-align: center;
  color:  var(--headerColor);
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li,
ol li {
  list-style: none;
  padding: 0;
}

#root {
  display: contents;
}

.app {
  width: min(600px, 100% - 2rem);
}


`;
