module.exports = {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      window: "readonly",
      document: "readonly",
      navigator: "readonly",
      console: "readonly",
      setTimeout: "readonly",
      clearTimeout: "readonly",
      setInterval: "readonly",
      clearInterval: "readonly",
      fetch: "readonly",
      FormData: "readonly",
      URL: "readonly"
    }
  },
  plugins: {
    react: require("eslint-plugin-react"),
    "react-hooks": require("eslint-plugin-react-hooks"),
    "react-refresh": require("eslint-plugin-react-refresh"),
    "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    prettier: require("eslint-plugin-prettier")
  },
  rules: {
    "prettier/prettier": [ "error", {
      semi: false,
      singleQuote: true
    } ],
    "react/prop-types": "off",
    "no-console": "warn",
    quotes: [ "error", "single" ],
    "jsx-quotes": [ "error", "prefer-double" ],
    "no-unused-vars": "error",
    "react-refresh/only-export-components": [ "warn", { allowConstantExport: true } ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          [ "^react", "^@?\\w" ],
          // Internal packages.
          [ "^(@|src)(/.*|$)" ],
          // Side effect imports.
          [ "^\\u0000" ],
          // Parent imports. Put `..` last.
          [ "^\\.\\.(?!/?$)", "^\\.\\./?$" ],
          // Other relative imports. Put same-folder imports and `.` last.
          [ "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$" ],
          // Style imports.
          [ "^.+\\.?(css)$" ]
        ]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
