import { ApolloServer } from "apollo-server";
import { appGraphQLSchema } from "@graphql/schema";

const server = new ApolloServer({
  schema: appGraphQLSchema,
  csrfPrevention: true
});

server.listen().then(({ url }) => {
  console.log(`=> Server ready at ${url}`);
});
