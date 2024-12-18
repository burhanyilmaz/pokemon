import { fireEvent, render } from '@testing-library/react-native';
import PokemonCard from 'components/PokemonCard';
import { PokemonCardType } from 'types/PokemonCardTypes';

const cardData = {
  id: '1',
  name: 'Pikachu',
  images: {},
} as PokemonCardType;

describe('<PokemonCard />', () => {
  test('Text renders correctly on PokemonCard', () => {
    const { getByText } = render(<PokemonCard pokemon={cardData} />);

    getByText(cardData.name);
  });

  test('should call onPress when pressed', () => {
    const onPress = jest.fn();

    const { getByText } = render(<PokemonCard pokemon={cardData} onPress={onPress} />);
    fireEvent.press(getByText(cardData.name));
    expect(onPress).toHaveBeenCalled();
  });
});
