import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import astroMetaTags from "astro-meta-tags"
import tailwind from "@astrojs/tailwind"
import shikiTheme from "./shiki-theme.json"

// https://astro.build/config
export default defineConfig({
	site: "https://berzan.org/",
	build: {
		format: "file",
	},
	trailingSlash: "never",
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: shikiTheme,
			},
		}),
		sitemap(),
		astroMetaTags(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
})
