import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html}"],
	theme: {
		extend: {},
	},
	plugins: [typography()],
}
