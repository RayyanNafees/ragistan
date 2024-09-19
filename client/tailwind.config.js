/** @type {Config} */
/** @typedef {import('tailwindcss').Config} Config */

import { addIconSelectors } from "@iconify/tailwind";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				roboto: ["var(--font-roboto)"],
				outfit: ["var(--font-outfit)"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("rippleui"),
		addIconSelectors(["mdi", "mdi-light"]),
	],
};
