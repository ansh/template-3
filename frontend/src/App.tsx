import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import DataFetcher from "./components/DataFetcher";
import { QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient, queryClient } from "./config/trpc";
import AuthenticatedDataFetcher from "./components/AuthenticatedDataFetcher";

const App: React.FC = () => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className="App">
            <Auth />
            <Welcome />
            <DataFetcher />
            <AuthenticatedDataFetcher />
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
