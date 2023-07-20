import { Container, Text, Image } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";

export const NoFavorites: NextPage<{}> = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100hv-100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="No Pokemon"
      />
    </Container>
  );
};
