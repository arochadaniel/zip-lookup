import { GraphQLError } from "graphql";

export const generateMockGraphQLError = (code?: string) => {
  const error = new GraphQLError(
    "Mock GraphQL Error",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    { code: code || "ApolloError" }
  );

  return error;
};
