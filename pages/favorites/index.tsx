import { Layout } from "@/componentes/layouts";
import { NoFavorites } from "@/componentes/ui";
import { FavoritePokemons } from "@/componentes/pokemon/FavoritePokemons";
import { localFavorites } from "@/utils";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Favorites: NextPage<{}> = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Pokémon favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
