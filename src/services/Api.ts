import axios from 'axios';
import { PokemonCardResponseType } from 'types/PokemonCardTypes';

export const axiosInstance = axios.create({ baseURL: 'https://api.pokemontcg.io/v2/' });

export const getPaginatedPokemonCards = async (page: number) => {
  const { data } = await axiosInstance.get<PokemonCardResponseType>(
    `cards?page=${page}&pageSize=10`,
  );

  return data;
};
