import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from '@tanstack/react-query';
import SaveCard from 'components/SaveCard';
import PokemonDetailsScreen from 'screens/Pokemon/PokemonDetailsScreen';
import PokemonListScreen from 'screens/Pokemon/PokemonListScreen';
import { queryClient } from 'services/queryClient';

export type PokemonStackParamList = {
  PokemonList: undefined;
  PokemonDetails: { id: string; name: string };
};

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>();

const MainNavigator = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <PokemonStack.Navigator>
        <PokemonStack.Screen
          name="PokemonList"
          component={PokemonListScreen}
          options={{ title: 'Pokemon List' }}
        />
        <PokemonStack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => <SaveCard cardId={route.params.id} />,
          })}
        />
      </PokemonStack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

export default MainNavigator;
