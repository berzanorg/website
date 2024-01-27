import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import astroMetaTags from "astro-meta-tags"

// https://astro.build/config
export default defineConfig({
    site: 'https://berzan.org',
    integrations: [mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: { theme: 'one-dark-pro' },
    }), sitemap(), astroMetaTags()],
})
