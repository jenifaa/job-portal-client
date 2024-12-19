import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.init";
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData);

  }
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);

  }
  const signInWithGoogle = () =>{
    return signInWithPopup(auth, provider);

  }
  const signInWithGitHub = () =>{
    return signInWithPopup(auth, provider2)
  }
  const authInfo = {
    setUser,
    user,
    newUser,
    userLogin,
    loading,
    logOut,
    updateUserProfile,
    signInWithGoogle,
    signInWithGitHub
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
