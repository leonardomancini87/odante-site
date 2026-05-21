import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    heroImage: z.string().optional(),
    featuredImage: z.string().optional(),

    authors: z.array(z.string()).optional(),
    toc: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const performances = defineCollection({
  loader: glob({
    base: './src/content/performances',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),

    featuredImage: z.string().optional(),
    image: z.string().optional(),

    odanteId: z.number().optional(),
    wordpressUrl: z.string().optional(),

    year: z.number().optional(),
    status: z.string().optional(),
    company: z.string().optional(),
    director: z.string().optional(),
    city: z.string().optional(),
    descriptionSource: z.string().optional(),
    descriptionSourceUrl: z.string().optional(),
    criticalNote: z.string().optional(),
    criticalNoteAuthor: z.string().optional(),
    criticalNoteDate: z.string().optional(),
  }),
});

export const collections = {
  blog,
  performances,
};