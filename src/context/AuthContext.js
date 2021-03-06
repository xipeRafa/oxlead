import { createContext, useEffect, useState } from 'react';
import { authApp, firestoreApp } from '../config/firebase';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return authApp.signOut();
  };

  const noteContext = (auctionId, note) => {

    const db = firestoreApp.collection('oxxoLider');

    return db.doc(auctionId).update({
      note:note
    });
  };

   useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return subscribe;
  }, []); 

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        noteContext
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
