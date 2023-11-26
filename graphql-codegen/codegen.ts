import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:54321/graphql/v1',
  overwrite: true,
  watch: true,
  documents: ['app/**/*.{ts,tsx,graphql}'],
  generates: {
    'graphql-codegen/generated/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
        apolloClientVersion: 3,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
    },
    // NOTE: api.ts generates automatically custom hooks for each query/mutation
    'graphql-codegen/generated/api.ts': {
      overwrite: true,
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        // NOTE: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo
        useTypeImports: true,
        withComponent: false,
        withHOC: false,
        withHooks: true,
        withRefetchFn: true,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
    },
  },
  ignoreNoDocuments: true,
  config: {
    useTypeImports: true,
    scalars: {
      UUID: 'string',
      Date: 'string',
      Time: 'string',
      Datetime: 'string',
      JSON: 'string',
      BigInt: 'number',
      BigFloat: 'number',
      Opaque: 'any'
    }
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
}

export default config
