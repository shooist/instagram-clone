import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { MessageBar } from "src/components/shared/MessageBar";
import { MessageContextProvider } from "src/contexts/MessageContext";
import Amplify from "aws-amplify";
import Auth, {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsmobile from "src/aws-exports";
import { useRouter } from "next/router";

Amplify.configure(awsmobile);

const App = (props: AppProps) => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<object | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log("_app onAuthUIStateChange");
      setAuthState(nextAuthState);
      setUser(authData);
      setIsLoading(false);
    });
  }, []);

  const isSignedIn = authState === AuthState.SignedIn && user;
  const isIndexAccess = router.pathname === "/";
  console.log("*** _app authState : ", authState);
  console.log("*** _app user      : ", user);
  console.log("*** _app isLoading : ", isLoading);

  // TOPページはログイン無しで入れる、それ以外は認証必須
  return isSignedIn ? (
    <AmplifyAuthenticator>
      <MessageContextProvider>
        <MessageBar />
        <AmplifySignOut />
        <props.Component {...props.pageProps} />
      </MessageContextProvider>
    </AmplifyAuthenticator>
  ) : !isLoading && isIndexAccess ? (
    <MessageContextProvider>
      <MessageBar />
      <props.Component {...props.pageProps} />
    </MessageContextProvider>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn />
    </AmplifyAuthenticator>
  );
};

export default App;
