/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';

import { createContext } from 'react';
import { User } from './services/gamer-shelf/models/user';
import { gamerShelfTheme } from './theme';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type UserContextValue = {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined,
});

export const gamerShelfThemeContext = createContext(gamerShelfTheme);
