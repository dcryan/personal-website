# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

This is a personal website built with Next.js 14 (App Router) and TypeScript. Deployed on Vercel.

### Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/data/` - Static data files (portfolio.ts for project/work history)
- `src/lib/` - Utility libraries (blog.ts for markdown parsing)
- `content/blog/` - Markdown blog posts with frontmatter (title, date, description, slug)
- `@/*` path alias maps to `./src/*`

### Pages

- `/` - Home page with navigation links to projects, blog, and contact
- `/projects` - Portfolio page with freelance, full-time, side projects, and education sections
- `/blog` - Blog listing page (reads markdown from content/blog/)
- `/blog/[slug]` - Individual blog post pages (statically generated)
- `/contact` - Contact form (uses Netlify Forms, client component)
- `/success` - Form submission success page

### Styling

- Tailwind CSS for all styling
- IBM Plex Mono as the primary font (loaded via `next/font`)
- Color scheme: gray-800 background with accent colors (green, yellow, teal, rose)

### Key Components

- `HeaderBar` - Colored accent bar at top of each page (green=home, yellow=projects, blue/teal=blog, red=contact)
- `Header` - Navigation header with social links
- `HomeLink` - Styled navigation links for home page

### Configuration

- `vercel.json` - Redirects www to non-www, HSTS headers
- `next.config.mjs` - Allows images from images.unsplash.com
