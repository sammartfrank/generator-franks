module.exports = {
  root: true,
  extends: ["standard", "prettier", "eslint:recommended"],
  plugins: ["prettier", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        bracketSpacing: true,
        trailingComma: "es5",
        printWidth: 120,
        endOfLine: "auto",
      },
    ],
  },
};
