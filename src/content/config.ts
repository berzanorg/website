import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.array(z.string()),
	}),
})

const pagesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.array(z.string()),
	}),
})

export const collections = {
	posts: postsCollection,
	pages: pagesCollection,
}
