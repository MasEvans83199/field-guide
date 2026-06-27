import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
    collections: {
        birds: defineCollection({
            type: 'page',
            source: 'birds/*.md',
            schema: z.object({
                title: z.string(),
                family: z.string(),
                region: z.string(),
            })
        })
    }
})