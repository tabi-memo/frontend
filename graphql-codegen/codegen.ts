import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:54321/graphql/v1',
  overwrite: true,
  watch: true,
  documents: ['app/**/*.{ts,tsx}'],
  generates: {
    'graphql-codegen/generated/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
        apolloClientVersion: 3,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
    }
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
  }
}

export default config
