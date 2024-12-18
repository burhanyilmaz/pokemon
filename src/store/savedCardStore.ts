import { observable } from '@legendapp/state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureSynced, syncObservable } from '@legendapp/state/sync';
import { observablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage';

type SavedCardsState = {
  cards: { [key: string]: true };
  toggleSavedCard: (id: string) => void;
  checkIsCardSaved: (id: string) => boolean;
};

export const savedCardStore$ = observable<SavedCardsState>({
  cards: {},
  toggleSavedCard: id => {
    const cards = savedCardStore$.cards.get();

    savedCardStore$.cards[id].set(cards[id] ? false : true);
  },

  checkIsCardSaved: id => {
    const cards = savedCardStore$.cards.get() as { [key: string]: true };

    return !!cards[id];
  },
});

const persistOptions = configureSynced({
  persist: {
    plugin: observablePersistAsyncStorage({
      AsyncStorage,
    }),
  },
});
syncObservable(
  savedCardStore$,
  persistOptions({
    persist: {
      name: 'savedCardStore',
    },
  }),
);
