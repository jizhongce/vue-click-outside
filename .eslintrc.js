module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunctions": true,
            "destructuring": true,
            "blockBindings": true, 
            "objectLiteralComputedProperties": true,
            "spread": true,
            "forOf": true, 
            "templateStrings": true,
            "superInFunctions": true
        },
    },
    env: {
        browser: true,
        node: true
    },
    extends: ['plugin:vue/strongly-recommended', 'standard'],
    globals: {
        __static: true
    },
    plugins: [
        'vue',
        'standard'
    ],
    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],// 项目负责人制定具体缩进个数2/4
        "array-bracket-spacing": [0, "never"],
        "linebreak-style": [0, "unix"],
        "quotes": [2, "single"],
        "semi": [2, "never"],
        "no-alert": 2,
        "no-eval": 0,
        "no-debugger": 1,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-redeclare": 2,
        "eqeqeq": [2, "always"],
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, { "before": false, "after": true }],
        "comma-style": [2, "last"], 
        "default-case": 2,
        "no-duplicate-case": 2,
        "no-class-assign": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-eq-null": 2,
        "no-floating-decimal": 2,
        "no-throw-literal": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 0,
        "one-var": 2,
        "use-isnan": 2,
        "valid-typeof": 2,

        "vue/html-indent": [2, 4],// 项目负责人制定具体缩进个数2/4
        "vue/max-attributes-per-line": 0,
        "vue/html-self-closing": 0,
        "vue/no-dupe-keys": 0,
        "vue/no-side-effects-in-computed-properties": 0,
        "vue/attribute-hyphenation": 0
    }
};