import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "src/contexts/AuthContext";

const App = (props: AppProps) => {
  return (
    <AuthContextProvider>
      <props.Component {...props.pageProps} />
    </AuthContextProvider>
  );
};

export default App;
