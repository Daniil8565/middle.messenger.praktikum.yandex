import parsel from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    ignores: ["/node_modules", "/github", "/dist"],
    languageOptions: {
      parser: parsel,
    },
  },
];
