import { useState, useEffect } from "react";
import Card from "./components/Card";
import DifficultySelector from "./components/DifficultySelector";
import { Card as CardType, Difficulty } from "./types";
import { soundManager } from "./utils/sounds";
import { AppContainer, GameBoard, Stats, Title, Button } from "./App.styles";
import Confetti from "react-confetti";
import FlexBox from "./components/FlexBox";

const App = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const calculateScore = (
    moveCount: number,
    difficultyLevel: Difficulty
  ): number => {
    const baseScore = 1000;
    const movePenalty = 50;
    const minimumScore = 100;

    const totalPairs = difficultyLevel;
    const minimumMoves = totalPairs;

    const score = baseScore - (moveCount - minimumMoves) * movePenalty;

    const difficultyMultiplier = {
      [Difficulty.EASY]: 1,
      [Difficulty.MEDIUM]: 1.5,
      [Difficulty.HARD]: 2,
    };

    const finalScore = Math.floor(
      score * difficultyMultiplier[difficultyLevel]
    );

    return Math.max(finalScore, minimumScore);
  };

  const initializeGame = (diff: Difficulty = difficulty) => {
    setIsLoading(true);

    const pokemonIds = Array.from({ length: diff }, (_, i) => i + 1);
    const gameCards = [...pokemonIds, ...pokemonIds];

    const shuffledCards: CardType[] = gameCards
      .sort(() => Math.random() - 0.5)
      .map((pokemonId, index) => ({
        id: index,
        pokemonId,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setScore(0);
    setIsLoading(false);
  };

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      setMoves((currentMoves) => currentMoves + 1);

      if (firstCard.pokemonId === secondCard.pokemonId) {
        soundManager.play("match");
        setMatched((prev) => [...prev, firstCard.pokemonId]);
        const newScore = calculateScore(moves + 1, difficulty);
        setScore(newScore);
      } else {
        //soundManager.play("wrong");
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  }, [flipped]);

  const handleCardClick = (index: number): void => {
    if (flipped.length === 2) return;
    if (flipped.includes(index)) return;
    if (matched.includes(cards[index].pokemonId)) return;

    soundManager.play("flip");
    setFlipped((prev) => [...prev, index]);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    if (moves > 0) {
      if (
        window.confirm("Changing difficulty will restart the game. Continue?")
      ) {
        setDifficulty(newDifficulty);
      }
    } else {
      setDifficulty(newDifficulty);
    }
  };

  const toggleSound = () => {
    soundManager.toggleMute();
    setIsMuted(!isMuted);
  };

  const isWon = matched.length === difficulty;

  useEffect(() => {
    if (isWon) {
      soundManager.play("win");
    }
  }, [isWon]);

  if (isLoading) {
    return (
      <AppContainer>
        <Title>Loading...</Title>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      {isWon && <Confetti />}
      <Title>Pokemon Memory Game</Title>
      <FlexBox
        direction="row"
        justify="space-between"
        align="center"
        styleOverrides={{ "padding-bottom": "20px" }}
      >
        <Button onClick={toggleSound}>
          {isMuted ? "🔇 Unmute" : "🔊 Mute"}
        </Button>
        <Stats>
          <p>Score: {score}</p>
          <p>Moves: {moves}</p>
          {isWon && (
            <>
              <p>Congratulations! You won!</p>
              <Button onClick={() => initializeGame()}>Play Again</Button>
            </>
          )}
        </Stats>
        <DifficultySelector
          difficulty={difficulty}
          onChange={handleDifficultyChange}
          disabled={flipped.length > 0}
        />
      </FlexBox>

      <GameBoard>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            pokemonId={card.pokemonId}
            isFlipped={flipped.includes(index)}
            isMatched={matched.includes(card.pokemonId)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </GameBoard>
    </AppContainer>
  );
};

export default App;
