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
        "key-spacing": "off",
        "@typescript-eslint/key-spacing": "error"
    }
};