import "tailwindcss/tailwind.css";
import { AuthProvider } from "../src/contexts/AuthContexts";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
