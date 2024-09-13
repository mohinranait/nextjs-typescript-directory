import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {

				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				'bg-themne': 'var(--bg-theme)'
			},
			borderRadius: {

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
