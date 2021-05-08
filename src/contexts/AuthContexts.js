import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const signin = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // history.push("/");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // history.push("/");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signout = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin: signin,
        signup: signup,
        signout: signout,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
