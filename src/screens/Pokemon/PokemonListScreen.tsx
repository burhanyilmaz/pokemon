import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import Loading from 'components/Loading';
import PokemonCard, { PokemonCardHeight } from 'components/PokemonCard';
import { PokemonStackParamList } from 'navigators/MainNavigator';
import { RefreshControl, StyleSheet, View } from 'react-native';
import { usePokemonCards } from 'services/queries';
import { colors } from 'theme/colors';
import { PokemonCardType } from 'types/PokemonCardTypes';

const PokemonListScreen = () => {
  const { fetchNextPage, pokemonCards, isLoading, refetch, isRefetching } = usePokemonCards();
  const { navigate } = useNavigation<NavigationProp<PokemonStackParamList, 'PokemonList'>>();

  const renderItem: ListRenderItem<PokemonCardType> = ({ item }) => (
    <PokemonCard
      pokemon={item}
      onPress={() => {
        navigate('PokemonDetails', { id: item.id, name: item.name });
      }}
    />
  );

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      <FlashList
        numColumns={2}
        data={pokemonCards}
        testID="pokemonCardList"
        renderItem={renderItem}
        onEndReachedThreshold={1.2}
        onEndReached={fetchNextPage}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={PokemonCardHeight}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={isRefetching}
            tintColor={colors.primary}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default PokemonListScreen;
