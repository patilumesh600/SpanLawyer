import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  select {
    font-family: Segoe UI, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    font-size:14px
  }
  button {
    border-radius:0px;
  }
  .bmargin-5, .lblmargin-5, hr {
    margin-bottom:5px !important;
  }
  .pgContainer {
min-height: 100% !important;

  }
  .pad-0{
    padding: 0px 0px !important;
}
.bgClr-warning {
  background-color: #fff2cb !important;
}

.bgClr-success {
  background-color: #d4edda !important;
}

.bgClr-danger {
  background-color: #ffc0c0 !important;
}
.hryellow {
  margin-top: 2px; border-top: 1px solid #ffc107
  }

    .hrgray {
      margin-top: 2px; border-top: 1px solid #d6d6d6
      }
      .noBg {
        background-color: transparent !important;
    }
`;

export default GlobalStyle;
