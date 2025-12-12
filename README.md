# AstraCMS Astro Example

An example [Astro](https://astro.build) blog powered by [AstraCMS](https://astracms.com) — the headless CMS for modern websites.

## ✨ Features

- ✅ Content managed via AstraCMS dashboard
- ✅ Type-safe content loading with `@astracms/astro-loader`
- ✅ Markdown & HTML content support
- ✅ Categories and tags for content organization
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ 100/100 Lighthouse performance

## 🚀 Quick Start

### 1. Clone the Repository

```sh
git clone https://github.com/astracms/astro-example.git
cd astro-example
pnpm install
```

### 2. Configure AstraCMS

Create a `.env` file in the root directory:

```sh
ASTRACMS_API_KEY=astra_pk_your_api_key_here
```

Get your API key from the [AstraCMS Dashboard](https://app.astracms.com).

### 3. Configure Content Collections

Update `src/content.config.ts` to match your AstraCMS categories:

```typescript
import { defineCollection } from 'astro:content';
import { postsLoader } from '@astracms/astro-loader';

const config = {
  apiKey: import.meta.env.ASTRACMS_API_KEY,
};

const blog = defineCollection({
  loader: postsLoader({
    ...config,
    format: 'markdown', // or 'html'
    categories: ['blog'],
  }),
});

export const collections = { blog };
```

### 4. Start Development

```sh
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to see your site.

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page and post layouts
│   ├── pages/          # Route pages
│   │   ├── blog/       # Blog listing and post pages
│   │   └── index.astro # Homepage
│   ├── styles/         # Global styles
│   ├── consts.ts       # Site constants
│   └── content.config.ts # AstraCMS loader config
├── .env.example        # Environment variables template
├── astro.config.mjs    # Astro configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Installs dependencies                        |
| `pnpm dev`      | Starts local dev server at `localhost:4321`  |
| `pnpm build`    | Build your production site to `./dist/`      |
| `pnpm preview`  | Preview your build locally, before deploying |

## � Learn More

- [AstraCMS Documentation](https://docs.astracms.com)
- [Astro Documentation](https://docs.astro.build)
- [@astracms/astro-loader on npm](https://www.npmjs.com/package/@astracms/astro-loader)

## 📄 License

MIT
