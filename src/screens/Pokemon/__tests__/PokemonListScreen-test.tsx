import { act, fireEvent, render, renderHook } from '@testing-library/react-native';
import { QueryWrapper, sleep, TestAppNavigator } from 'libs/testHelpers';
import * as queries from 'services/queries';

describe('<PokemonListScreen />', () => {
  test('show loading component correctly on PokemonListScreen', async () => {
    const { getByTestId, queryAllByTestId } = render(TestAppNavigator());
    renderHook(() => queries.usePokemonCards(), { wrapper: QueryWrapper });

    getByTestId('loading');
    await act(async () => {
      await sleep(2000);
    });
    expect(queryAllByTestId('loading')).toHaveLength(0);
  });

  test('show pokemon card list correctly on PokemonListScreen', async () => {
    const { getByText, queryAllByTestId } = render(TestAppNavigator());
    const { result } = renderHook(() => queries.usePokemonCards(), { wrapper: QueryWrapper });

    await act(async () => {
      await sleep(2000);
    });

    // info: flash list renders 4 items at a time according to estimatedItemSize
    result.current.pokemonCards.slice(0, 4).forEach(card => getByText(card.name));
    expect(queryAllByTestId('pokemonCard')).toHaveLength(4);
  });

  test('should navigate to correct PokemonDetailsScreen when pokemon card is pressed', async () => {
    const { queryAllByTestId, getByText } = render(TestAppNavigator());
    const { result } = renderHook(() => queries.usePokemonCards(), { wrapper: QueryWrapper });

    fireEvent.press(queryAllByTestId('pokemonCard')[0]);
    getByText(result.current.pokemonCards[0].name);
  });

  test('should trigger fetch next page when end reached', async () => {});
  test('should trigger refetch when pull to refresh', async () => {});
});
