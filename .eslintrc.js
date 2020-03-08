module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "kentcdodds",
    "kentcdodds/react",
    "kentcdodds/jsx-a11y",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "react/jsx-pascal-case": "off",
    "import/order": "off",
    "babel/camelcase": "off",
    "jsx-a11y/label-has-for": "off",
    "max-lines-per-function": "off",
    "babel/quotes": "off",
    "consistent-return": "off",
  },
}
