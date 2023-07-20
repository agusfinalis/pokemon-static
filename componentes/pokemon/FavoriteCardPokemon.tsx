import React, { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  favoriteId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ favoriteId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${favoriteId}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={favoriteId}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${favoriteId}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};
