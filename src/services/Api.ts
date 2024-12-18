import axios from 'axios';
import { PokemonCardResponseType, PokemonCardType } from 'types/PokemonCardTypes';

export const axiosInstance = axios.create({ baseURL: 'https://api.pokemontcg.io/v2/' });

export const getPaginatedPokemonCards = async (page: number) =>
  (await axiosInstance.get<PokemonCardResponseType>(`cards?page=${page}&pageSize=10`)).data;

export const getPokemonCard = async (id: string) =>
  (await axiosInstance.get<{ data: PokemonCardType }>(`cards/${id}`)).data;
