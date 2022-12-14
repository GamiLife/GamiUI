/* eslint-disable no-undef */
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
    'preval',
    'tsconfig-paths-module-resolver',
    [
      'babel-plugin-replace-imports',
      {
        test: /\/styled-base/,
        replacer: '/styled',
      },
    ],
    [
      '@emotion',
      {
        cssPropOptimization: true,
        importMap: {
          '@emotion/styled-base': {
            default: {
              canonicalImport: ['@emotion/styled', 'default'],
            },
          },
        },
      },
    ],
  ],
}
