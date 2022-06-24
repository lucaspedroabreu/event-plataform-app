import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_API_URL,
  headers: {
    Authorization:
      "Bearer " + import.meta.env.VITE_GRAPHCMS_SUBSCRIBER_API_TOKEN,
  },
  cache: new InMemoryCache(),
})
