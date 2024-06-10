import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // email & password auth..
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout..
  const Logout = () => {
    setLoading(true);
    const { data } = axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    signOut(auth);
  };
  // Login User...
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GoogleLogin..
  const GoogleProvider = new GoogleAuthProvider();
  const googleSingIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  // Observer get user data..
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      console.log("observing current user", currentUser);
      // if user exists then issue a token...
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        axios
          .post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setUser(null);
            setLoading(false);
          });
      }
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    Logout,
    updateUserProfile,
    googleSingIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
