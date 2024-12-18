import { RouteProp, useRoute } from '@react-navigation/native';
import Loading from 'components/Loading';
import { height, width } from 'libs/utils';
import { PokemonStackParamList } from 'navigators/MainNavigator';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { usePokemonCard } from 'services/queries';
import { colors } from 'theme/colors';

const PokemonDetailsScreen = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<PokemonStackParamList, 'PokemonDetails'>>();
  const { data, isLoading } = usePokemonCard(id);
  const { text, name, cost, convertedEnergyCost } = data?.attacks[0] || {};

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.pokemonImage}
          source={{ uri: data?.images?.large }}
        />
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{data?.name}</Text>
            <View style={styles.detailsHeader}>
              <Text style={[styles.title, { color: colors.primary }]}>{data?.hp} HP</Text>
              <View style={styles.chip}>
                <Text style={[styles.title, { color: colors.white }]}>{data?.types}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.attacksText}>ATTACKS</Text>
          <View style={styles.attackDetails}>
            {!!text && <Text>{text}</Text>}
            <Text style={{ marginTop: !!text ? 8 : 0 }}>
              <Text style={styles.attacksLabel}>Name: </Text> {name}
            </Text>
            <Text>
              <Text style={styles.attacksLabel}>Retreat Cost: </Text> {cost.join(', ')}
            </Text>
            <Text>
              <Text style={styles.attacksLabel}>Converted Energy Cost: </Text>
              {convertedEnergyCost}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { marginTop: 16, flex: 1 },
  scroll: { backgroundColor: colors.white, flex: 1 },
  scrollContent: { flexGrow: 1, marginBottom: 16 },
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: colors.background,
  },
  detailsContainer: {
    padding: 16,
    marginTop: -16,
    backgroundColor: colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.15,
    flexGrow: 1,
    flex: 1,
    height: height / 2,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    padding: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 16,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pokemonImage: {
    width,
    height: width * 0.75,
    marginBottom: 24,
  },
  attacksText: { fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 16 },
  attackDetails: {
    backgroundColor: 'whitesmoke',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  attacksLabel: {
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default PokemonDetailsScreen;
