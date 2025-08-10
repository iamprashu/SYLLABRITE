import { ClerkProvider } from "@clerk/clerk-react";
import BrowserRouterProvider from "./router/BrowserRouterProvider";

function App({ children }) {
  const PUB_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={PUB_KEY}>
      <BrowserRouterProvider>{children}</BrowserRouterProvider>
    </ClerkProvider>
  );
}

export default App;
