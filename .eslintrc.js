module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'vue/no-unused-vars': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  