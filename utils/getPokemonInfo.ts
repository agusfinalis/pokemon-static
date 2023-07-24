import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    const { id, name: pokemonName, sprites } = data;
    const pokemon = { id, name: pokemonName, sprites };
    return pokemon;
  } catch (error) {
    return null;
  }
};
