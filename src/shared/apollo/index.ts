import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer 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",
  },
});

export default apolloClient;
