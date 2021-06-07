import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Pokemon } from '../types';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<Pokemon, string>({
        query: (name) => `pokemon/${name}`,
      }),
    }),
})
  