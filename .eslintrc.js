module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-constant-condition": [
          "error",
          {"checkLoops": false}
        ],
        "react/display-name": "off"
    }
};
