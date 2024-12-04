export interface Card {
  id: number;
  pokemonId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface CardProps {
  pokemonId: number;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
  onImageError?: () => void;
}

export interface StyledCardProps {
  isMatched?: boolean;
  isFlipped?: boolean;
}

export interface DifficultySelectorProps {
  difficulty: Difficulty;
  onChange: (difficulty: Difficulty) => void;
  disabled?: boolean;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  shadows: {
    card: string;
  };
  transitions: {
    card: string;
  };
}

export enum Difficulty {
  EASY = 6,
  MEDIUM = 8,
  HARD = 12,
}

export interface StyleOverrides {
  [key: string]: string | number;
}
