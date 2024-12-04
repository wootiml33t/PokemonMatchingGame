import { StyledCardProps } from "../../types";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const CardContainer = styled.div<StyledCardProps>`
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: ${({ isMatched }) => (isMatched ? "default" : "pointer")};
  opacity: ${({ isMatched }) => (isMatched ? 0.7 : 1)};

  &:hover {
    animation: ${bounce} 0.3s ease-in-out;
  }
`;

export const CardInner = styled.div<StyledCardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: ${({ theme }) => theme.transitions.card};
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  background: ${({ theme }) => theme.colors.cardBack};
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const CardFront = styled(CardSide)`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: white;
  font-size: 2.5em;
  font-weight: bold;
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  padding: 10px;
  background: white;
`;

export const PokemonImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
`;
