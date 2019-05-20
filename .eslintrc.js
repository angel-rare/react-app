module.exports = {
  "extends": "fbjs",
  "rules": {
    "indent": ["error", 2] // A custom style-related rule for example
    // More custom rules here
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}