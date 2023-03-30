module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "comma-dangle": "off",
    "react/jsx-no-useless-fragment": "off",
    "import/prefer-default-export": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/prop-types": "off",
    "treact/jsx-no-bind": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
    camelcase: "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};