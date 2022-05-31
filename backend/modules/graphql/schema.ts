import * as resolvers from "./resolvers";
import * as types from "./types";

import { makeExecutableSchema } from "@graphql-tools/schema";
import merge from "lodash/merge";

export const appGraphQLSchema = makeExecutableSchema({
  typeDefs: Object.values(types),
  resolvers: merge(Object.values(resolvers))
});
