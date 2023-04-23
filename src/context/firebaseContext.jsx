import { createContext, useContext } from 'react';
import Firebase from '../api/firebase';

export const FirebaseContext = createContext();

const firebase = new Firebase();

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}
