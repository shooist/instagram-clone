import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase, { auth } from "src/firebase/init";
import type { User } from "@firebase/auth-types";
import { authMessageAsJP } from "src/firebase/authMessageAsJP";

type Context = {
  signup: any;
  signin: any;
  signout: any;
  currentUser: User | null;
  isAuthChecked: boolean;
};

export const AuthContext = createContext<Context>({
  signup: null,
  signin: null,
  signout: null,
  currentUser: null,
  isAuthChecked: false,
});

export const AuthContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);
  const router = useRouter();

  const signin = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (error) {
      throw { ...error, message: authMessageAsJP(error, "signin") };
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthChecked(true);
    });
  }, []);

  const value = {
    signin: signin,
    signup: signup,
    signout: signout,
    currentUser: currentUser,
    isAuthChecked: isAuthChecked,
  };

  return <AuthContext.Provider value={value} {...props} />;
};
