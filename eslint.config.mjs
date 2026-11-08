import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  { ignores: [".next/**", "out/**", "build/**", "coverage/**"] },
  js.configs.recommended,
  ...nextVitals,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off"
    }
  },
  prettier
];

export default eslintConfig;
