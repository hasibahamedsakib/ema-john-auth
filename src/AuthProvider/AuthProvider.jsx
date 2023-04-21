import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState({});

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  const authValue = { users, userSignUp, userLogIn, userLogOut };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
