import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailsScreen from 'screens/Pokemon/PokemonDetailsScreen';
import PokemonListScreen from 'screens/Pokemon/PokemonListScreen';

type PokemonStackParamList = {
  PokemonList: undefined;
  PokemonDetails: undefined;
};

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <PokemonStack.Navigator>
      <PokemonStack.Screen name="PokemonList" component={PokemonListScreen} />
      <PokemonStack.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
    </PokemonStack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
