// src/gatsby-plugin-apollo/client.js
import fetch from "isomorphic-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from "crypto-hash";

const linkChain = createPersistedQueryLink({ sha256 }).concat(
  new HttpLink({ uri: process.env.STRAPI_API_URL+'/graphql' })
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: linkChain,
});

export default client;
