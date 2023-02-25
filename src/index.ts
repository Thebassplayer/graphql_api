import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "../server/schema";
import { resolvers } from "../server/resolvers";

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

export const serverListener = app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
  