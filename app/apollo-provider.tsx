'use client'

import { HttpLink, ApolloLink } from '@apollo/client'
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'

function apiEndpoint(): { uri: string; headers?: Record<string, string> } {
  return {
    uri:
      (process.env.GRAPHQL_ENDPOINT as string) ||
      'http://127.0.0.1:54321/graphql/v1',
    headers: {
      apiKey: process.env.API_KEY as string
    }
  }
}

function makeClient() {
  const httpLink = new HttpLink(apiEndpoint())

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
