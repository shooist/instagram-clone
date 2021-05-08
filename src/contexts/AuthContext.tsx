import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase, { auth } from "src/firebase/auth";

type Context = {
  signup: any;
  signin: any;
  signout: any;
  currentUser: firebase.User | null;
};

export const AuthContext = createContext<Context>({
  signup: null,
  signin: null,
  signout: null,
  currentUser: null,
});

export const AuthContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const router = useRouter();

  const signin = async (email: string, password: string, history: any) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // history.push("/");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (email: string, password: string, history: any) => {
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
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  const value = {
    signin: signin,
    signup: signup,
    signout: signout,
    currentUser: currentUser,
  };

  return <AuthContext.Provider value={value} {...props} />;
};
