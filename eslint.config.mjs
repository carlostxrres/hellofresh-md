import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                "GM": "readonly",
                "GM_addStyle": "readonly",
                "GM_getValue": "readonly",
                "GM_setValue": "readonly",
            }
        },
        rules: {
            // semi: "error",
            "prefer-const": "error",
            "no-undef": "error"
        }
    },
    pluginJs.configs.recommended,
];