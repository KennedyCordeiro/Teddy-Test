import { keyframes } from "styled-components";

export const slideInFwdBottom = keyframes`
  0% {
    transform: translateZ(-1400px) translateY(800px) translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateY(0) translateX(-50%);
    opacity: 1;
  }
`;
