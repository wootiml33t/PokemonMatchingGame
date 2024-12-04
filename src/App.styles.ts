import styled, { keyframes } from "styled-components";
import { breakpoints } from "./styles/breakpoints";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AppContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.container};
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3em;
  margin-bottom: 30px;
  text-shadow: 3px 3px 0 ${({ theme }) => theme.colors.secondary};
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

export const Stats = styled.div`
  margin: 20px 0;
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  font-size: 1.2em;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.button};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-height: 50px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const DifficultySelect = styled.select`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  margin: 10px 0;
`;
