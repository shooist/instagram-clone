import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "src/contexts/AuthContext";
import { MessageBar } from "src/components/shared/MessageBar";
import { MessageContextProvider } from "src/contexts/MessageContext";

const App = (props: AppProps) => {
  return (
    <AuthContextProvider>
      <MessageContextProvider>
        <MessageBar />
        <props.Component {...props.pageProps} />
      </MessageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
