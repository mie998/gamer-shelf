/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';

import { createContext } from 'react';
import theme from './theme';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

export const ThemeContext = createContext(
  (null as unknown) as typeof theme,
);
