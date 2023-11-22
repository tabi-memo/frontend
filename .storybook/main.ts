const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../app/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon'
  ],
  features: {
    emotionAlias: false
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../app')
        }
      }
    }
  }
}
