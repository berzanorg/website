import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html}"],
	theme: {
		extend: {
			fontFamily: {
				sans: '"Lexend", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				mono: '"Commitmono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
			},
		},
	},
	plugins: [typography()],
}
