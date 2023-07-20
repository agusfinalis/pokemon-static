import { Grid, Card } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  favoritesPokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <FavoriteCardPokemon favoriteId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
