module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "local-rules",
        "unused-imports",
        "import"
    ],
    rules: {
        "indent": ["error", 4, {"SwitchCase": 1, "ignoredNodes": ["JSXAttribute"]}],
        "semi": ["error", "always"],
        "eol-last": ["error", "never"],
        "no-unused-vars": ["off"],
        "padded-blocks": ["warn", "never"],
        "object-curly-spacing": ["error", "never"],
        "no-multiple-empty-lines": ["error", {max: 1}],
        "padding-line-between-statements": [
            "error",
            {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
            {blankLine: "always", prev: "*", next: "return"},
            {blankLine: "always", prev: ["if", "for"], next: ["if", "for"]}
        ],
        "no-extra-parens": ["error", "all", {
            ignoreJSX: "all",
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false
        }],
        "no-else-return": ["error"],
        "arrow-body-style": ["error", "as-needed"],
        "no-extra-boolean-cast": "error",
        "comma-dangle": "error",
        "local-rules/no-foreach": "error",
        "react/prop-types": ["off"],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, "first"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "unused-imports/no-unused-imports": 2,
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal"],
                "pathGroups": [{
                    "pattern": "@material-ui/**",
                    "group": "internal",
                    "position": "after"
                }],
                "pathGroupsExcludedImportTypes": ["react"],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ]
    }
};