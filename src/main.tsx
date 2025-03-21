import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>  
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);


//// wrapping the app with router enables the use of react router hooks within the app
// wrapping the app with query client provider enables the use of react query hooks within the app