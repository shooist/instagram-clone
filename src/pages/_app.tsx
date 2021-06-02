import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "src/contexts/AuthContext";
import { MessageBar } from "src/components/shared/MessageBar";
import { MessageContextProvider } from "src/contexts/MessageContext";
import { ApolloProvider } from "@apollo/client";
import client from "src/apollo/apollo-client";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsmobile from "src/aws-exports";

Amplify.configure(awsmobile);

const App = (props: AppProps) => {
  const [authState, setAuthState] = useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, []);

  return (
    <AmplifyAuthenticator>
      <MessageContextProvider>
        <MessageBar />
        <props.Component {...props.pageProps} />
      </MessageContextProvider>
    </AmplifyAuthenticator>
  );
};

export default App;
