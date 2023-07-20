import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next/types";

import { pokeApi } from "@/api";
import { Layout } from "@/componentes/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/componentes/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// se ejecuta del lado del servidor, menos en desarrollo
// no llega al cliente
// lo unico que llega es el objeto props
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png

  return {
    props: { pokemons },
  };
};

export default HomePage;
