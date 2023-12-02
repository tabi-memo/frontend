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
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
    headers: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY as string
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
        : httpLink,
    connectToDevTools: true
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
