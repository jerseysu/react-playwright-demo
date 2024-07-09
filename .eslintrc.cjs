// @ts-check
module.exports = {
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    "root": true,
    "overrides": [
        {
            files: ['src/**/*.ts', 'src/**/*.tsx']
        },
    ],
    "rules": {
        "indent": "off",
        "@typescript-eslint/indent": "error"
    }
};