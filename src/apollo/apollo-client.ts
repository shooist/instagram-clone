import { ApolloClient, InMemoryCache } from "@apollo/client";

// const graphqlUrl = "https://countries.trevorblades.com";
// const graphqlUrl = "http://localhost:5001/fzqgraphql";
const graphqlUrl = "http://localhost:5001/instagram-clone-e2448/asia-northeast1/graphql";

const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache(),
});

export default client;
