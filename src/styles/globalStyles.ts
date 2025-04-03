import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyles = css`
  ${emotionReset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    border-radius: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%; // 10px
  }
  body {
    font-display: swap;
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);
  }
`;

export default globalStyles;
