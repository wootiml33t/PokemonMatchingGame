import {
  CardBack,
  CardContainer,
  CardFront,
  CardInner,
  PokemonImage,
} from "./Card.styles";

import { CardProps } from "../../types";

const Card = ({ pokemonId, isFlipped, isMatched, onClick }: CardProps) => {
  const getPokemonImage = (id: number): string =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <CardContainer
      isMatched={isMatched}
      onClick={!isMatched ? onClick : undefined}
    >
      <CardInner isFlipped={isFlipped || isMatched}>
        <CardFront>?</CardFront>
        <CardBack>
          <PokemonImage
            src={getPokemonImage(pokemonId)}
            alt={`Pokemon ${pokemonId}`}
          />
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
