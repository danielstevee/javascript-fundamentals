import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],

        // Aturan dasar ESLint
        ...js.configs.recommended,

        // Karena JavaScript dijalankan menggunakan Node.js
        languageOptions: {
            globals: globals.node
        },

        // Aturan tambahan yang kita inginkan
        rules: {
            // Tidak boleh menggunakan var
            "no-var": "error",

            // Wajib menggunakan === atau !==
            "eqeqeq": "error",

            // Wajib menggunakan ;
            "semi": ["error", "always"],

            // Indentasi 4 spasi
            "indent": ["error", 4],

            // Variabel yang tidak digunakan → warning
            "no-unused-vars": "warn"
        }
    }
]);