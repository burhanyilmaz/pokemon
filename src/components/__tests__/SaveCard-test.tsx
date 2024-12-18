import { fireEvent, render } from '@testing-library/react-native';
import SaveCard from 'components/SaveCard';
import { savedCardStore$ } from 'store/savedCardStore';

describe('<SaveCard />', () => {
  test('should render Remove Card when card is saved', () => {
    const { getByText } = render(<SaveCard cardId="1" />);
    fireEvent.press(getByText('Save Card'));
    getByText('Remove Card');
  });

  test('should render Save Card when card is removed', () => {
    savedCardStore$.cards['1'].set(true);
    const { getByText } = render(<SaveCard cardId="1" />);
    fireEvent.press(getByText('Remove Card'));

    getByText('Save Card');
  });
});
