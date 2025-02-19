import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			"@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
			"@typescript-eslint/no-unused-expressions": [
				"error",
				{
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],
		},
	},
];

export default eslintConfig;
