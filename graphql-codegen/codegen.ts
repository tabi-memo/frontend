import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.GRAPHQL_ENDPOINT as string]: {
      headers: {
        apiKey: process.env.API_KEY as string
      }
    }
  },
  documents: ['app/graphql/**/*.graphql'],
  generates: {
    'graphql-codegen/generated/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: true,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
    }
  },
  ignoreNoDocuments: true,
  config: {
    scalars: {
      UUID: 'string',
      Date: 'string',
      Time: 'string',
      Datetime: 'string',
      JSON: 'string',
      BigInt: 'bigint',
      BigFloat: 'number',
      Opaque: 'any'
    }
  }
}

export default config
