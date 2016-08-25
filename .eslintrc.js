module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  env: {
    browser: true
  },
  'rules': {
    'import/no-unresolved': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'prefer-arrow-callback': 0,
    'no-param-reassign': 0,
    'no-debugger': 0,
    'vars-on-top': 0
  }
};
