import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "src/contexts/AuthContext";
import { MessageBar } from "src/components/shared/MessageBar";
import { MessageContextProvider } from "src/contexts/MessageContext";
import { ApolloProvider } from "@apollo/client";
import client from "src/apollo/apollo-client";

const App = (props: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <MessageContextProvider>
          <MessageBar />
          <props.Component {...props.pageProps} />
        </MessageContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default App;
