import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import firebase, { auth } from "src/firebase/init";
// import type { User } from "@firebase/auth-types";
// import { authMessageAsJP } from "src/firebase/authMessageAsJP";
import { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

type Context = {
  signup: any;
  confirmSignUp: any;
  signin: any;
  signout: any;
  currentUser: object | undefined;
  isSignin: boolean;
};

export const AuthContext = createContext<Context>({
  signup: null,
  confirmSignUp: null,
  signin: null,
  signout: null,
  currentUser: null,
  isSignin: false,
});

export const AuthContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<object | undefined>();
  const [isSignin, setIsSignin] = useState<boolean>(false);
  const router = useRouter();

  const signin = async (email: string, password: string) => {
    try {
      await Auth.signIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      await Auth.signUp(email, password, email);
      router.push("/confirmSignUp");
    } catch (error) {
      throw error;
    }
  };

  const confirmSignUp = async (email: string, verificationCode: string) => {
    try {
      await Auth.confirmSignUp(email, verificationCode);
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  const signout = async () => {
    try {
      await Auth.signOut();
      router.push("/signin");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  useEffect(() => {
    setIsSignin(authState === AuthState.SignedIn && user ? true : false);
  }, [user, authState]);

  const value = {
    signup: signup,
    confirmSignUp: confirmSignUp,
    signin: signin,
    signout: signout,
    currentUser: user,
    isSignin: isSignin,
  };

  return <AuthContext.Provider value={value} {...props} />;
};
