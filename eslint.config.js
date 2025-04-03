import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      parser: tseslint.Parser,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        google: "readonly",
        __SERVICE_NAME__: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "react/prop-types": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unescaped-entities": "off",
      "no-case-declarations": "off", // NOTE: switch 문 안에서 let, const 사용 가능
      "import/no-unresolved": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error", // NOTE: typescript의 오버로딩을 인식 하는 redeclare 설정
      "@typescript-eslint/no-unused-expressions": "off", // NOTE: 프로그램 상태에 영향을 주지 않는 로직 error 처리 off - 단축 평가 사용 가능
      "@typescript-eslint/no-empty-object-type": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "external",
            "internal",
            ["parent", "sibling", "index", "unknown"],
          ],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "~**", group: "internal", position: "before" },
            { pattern: "~**/**/*", group: "internal", position: "after" }, // NOTE: 예외 처리 때문에 추가
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: [],
          alphabetize: { order: "asc" },
        },
      ],
    },
    ignores: ["node_modules", "build-*", ".turbo"],
    settings: {
      react: {
        version: "detect",
      },
      // NOTE: eslint가 typescript 모듈을 인식하게 하기 위해서 필요
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["packages/typescript-config/base.json"],
        },
      },
    },
  },
);
