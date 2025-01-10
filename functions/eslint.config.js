const { FlatConfig } = require('eslint');

module.exports = [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'), // Definir el plugin correctamente
    },
    rules: {
      // tus reglas personalizadas aquí
    },
  },
];