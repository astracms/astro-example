import { defineCollection } from 'astro:content';
import {
  postsLoader,
} from '@astracms/astro-loader';

const config = {
  apiKey: import.meta.env.ASTRACMS_API_KEY,
};

const blog = defineCollection({
  loader: postsLoader({
    ...config,
    format: 'markdown', // or 'html'
	categories: ['blog', 'tutorials'],
  }),
});

const page = defineCollection({
  loader: postsLoader({
    ...config,
    format: 'markdown', // or 'html'
	categories: ['page'],
  }),
});

export const collections = { blog, page };
