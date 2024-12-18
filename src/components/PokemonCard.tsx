import { width } from 'libs/utils';
import { memo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PokemonCardType } from 'types/PokemonCardTypes';

type PokemonCardProps = {
  onPress?: () => void;
  pokemon: PokemonCardType;
};

export const PokemonCardImageHeight = (width - 32) / 1.5;

export const PokemonCardHeight = PokemonCardImageHeight + 24;

const PokemonCard = ({ pokemon, onPress }: PokemonCardProps) => (
  <Pressable onPress={onPress} testID="pokemonCard">
    {({ pressed }) => (
      <View style={[styles.container, pressed && { opacity: 0.5 }]}>
        <Image resizeMode="contain" source={{ uri: pokemon.images.small }} style={styles.image} />
        <Text numberOfLines={1} style={styles.text}>
          {pokemon.name}
        </Text>
      </View>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    width: (width - 32) / 2,
    height: PokemonCardImageHeight,
  },
  text: {
    marginTop: 4,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default memo(PokemonCard, (prev, next) => prev.pokemon.id === next.pokemon.id);
