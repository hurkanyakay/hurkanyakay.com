/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    & > div{
     height: 100%;
    }
  }
  * {
    -webkit-overflow-scrolling: touch;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
  #___gatsby{
    & > div{
      height: 100%;
    }
  }
  @keyframes ani-mouse {
    0% {
    opacity: 1;
    top: 29%;
    }
    15% {
    opacity: 1;
    top: 50%;
    }
    50% {
    opacity: 0;
    top: 50%;
    }
    100% {
    opacity: 0;
    top: 29%;
    }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
