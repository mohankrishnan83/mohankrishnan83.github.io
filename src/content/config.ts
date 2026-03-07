import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
    schema: z.object({
    title: z.string(),
    industry: z.string(),
    role: z.string(),
    scale: z.string(),
    summary: z.string(),
    featured: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  blog,
};