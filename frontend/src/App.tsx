import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { ZipLookup } from "./modules/features/zip";
import { apolloClient } from "./modules/core/apollo";

const App: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ZipLookup />
    </ApolloProvider>
  );
};

export default App;
