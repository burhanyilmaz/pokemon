import { observer } from '@legendapp/state/react';
import { getHitSlop } from 'libs/utils';
import { Pressable, StyleSheet, Text } from 'react-native';
import { savedCardStore$ } from 'store/savedCardStore';

type SaveCardProps = {
  cardId: string;
};

const SaveCard = ({ cardId }: SaveCardProps) => {
  const isCardSaved = savedCardStore$.get().checkIsCardSaved(cardId);

  return (
    <Pressable
      hitSlop={getHitSlop({ value: 20 })}
      onPress={() => savedCardStore$.toggleSavedCard(cardId)}>
      <Text style={styles.text}>{isCardSaved ? 'Remove Card' : 'Save Card'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default observer(SaveCard);
