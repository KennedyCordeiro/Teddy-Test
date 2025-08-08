import styled from "styled-components";
import { slideInFwdBottom } from "./animations";

export const Banner = styled.div`
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 68%;
  color: var(--secondary-color);
  padding: 1.1em 2em 1.1em 3em;
  text-align: left;
  z-index: 1000;
  border-radius: 0.9375rem;
  border: 1px solid var(--details-color);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fafafa;
  gap: 0.6em;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: clamp(0.7rem, 0.3571rem + 0.5357vw, 1rem);
  animation: ${slideInFwdBottom} 0.78s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (width <= 768px) {
    width: 95%;
    flex-direction: column;
    padding: 1em 1.5em;
    gap: 1em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-family: Poppins;
  font-size: clamp(1rem, 0.6rem + 0.625vw, 1.35rem);
  font-weight: 600;
  line-height: normal;
`;

export const Icon = styled.span`
  font-size: 1.2em;
`;

export const Description = styled.p`
  margin: 0;
  font-size: clamp(0.7rem, 0.3571rem + 0.5357vw, 1rem);
  line-height: 1.4;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
