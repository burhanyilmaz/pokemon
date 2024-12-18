import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { PokemonCardResponseType, PokemonCardType } from 'types/PokemonCardTypes';
import { getPaginatedPokemonCards, getPokemonCard } from './Api';
import { useMemo } from 'react';

export const usePokemonCards = () => {
  const { fetchNextPage, isLoading, refetch, data, isRefetching } =
    useInfiniteQuery<PokemonCardResponseType>({
      initialPageParam: 1,
      queryKey: ['pokemonCards'],
      placeholderData: keepPreviousData,
      queryFn: async ({ pageParam }) => getPaginatedPokemonCards(pageParam as number),
      getNextPageParam: lastPage =>
        lastPage.pageSize * lastPage.page < lastPage.totalCount ? lastPage.page + 1 : undefined,
    });

  const pokemonCards = useMemo(() => data?.pages.map(page => page.data).flat(1) || [], [data]);

  return { fetchNextPage, isLoading, refetch, pokemonCards, isRefetching };
};

export const usePokemonCard = (id: string) =>
  useQuery<PokemonCardType>({
    enabled: !!id,
    queryKey: ['pokemonCard', id],
    queryFn: async () => (await getPokemonCard(id)).data,
  });
