// @ts-check

/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
  extends: [
    'react-app',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: true,
  },
  plugins: ['prettier', 'import', 'react', 'jsx-a11y'],
  rules: {
    'no-unused-vars': 'warn',
    'arrow-parens': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'no-undef': 'warn',
    'no-unused-expressions': 'warn',
    'no-restricted-globals': 'warn',

    'import/no-unresolved': 0,
    'import/no-anonymous-default-export': 0,
    'import/newline-after-import': 1,
    'import/order': [
      'warn',
      {
        groups: [
          // Then builtin and external and internal types. They can be mingled together
          ['builtin', 'external', 'internal'],
          'object',
          'type',
          ['unknown', 'parent'],
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        singleQuote: true,
        bracketSameLine: true,
        trailingComma: 'es5',
        printWidth: 80,
        semi: true,
        arrowParens: 'always',
      },
    ],

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,

    'jsx-a11y/click-events-have-key-events': 0,
  },
  settings: {
    'import/resolver': {
      node: true,
      // webpack: true,
    },
  },
  // overrides: [
  //   {
  //     files: ['*.jsx', '*.js'],
  //   },
  // ],
  ignorePatterns: ['node_modules/', 'node_modules/*', 'build/', 'build/*'],
};

module.exports = config;
