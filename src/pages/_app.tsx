import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "src/contexts/AuthContext";
import { MessageBar } from "src/components/shared/MessageBar";
import { MessageContextProvider } from "src/contexts/MessageContext";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsmobile from "src/aws-exports";

Amplify.configure(awsmobile);

const App = (props: AppProps) => {
  // const [authState, setAuthState] = useState<AuthState>();

  // useEffect(() => {
  //   return onAuthUIStateChange((nextAuthState, authData) => {
  //     setAuthState(nextAuthState);
  //   });
  // }, []);

  return (
    <AuthContextProvider>
      <props.Component {...props.pageProps} />
    </AuthContextProvider>
  );
};

export default App;
