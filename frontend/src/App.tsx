import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { ZipLookupDashboard } from "./modules/features/zip";
import { apolloClient } from "./modules/core/apollo";

const App: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ZipLookupDashboard />
    </ApolloProvider>
  );
};

export default App;
