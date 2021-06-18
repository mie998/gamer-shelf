/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';

import { createContext } from 'react';
import { gamerShelfTheme } from './theme';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

export const gamerShelfThemeContext = createContext(gamerShelfTheme);
