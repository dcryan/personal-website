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
- `src/data/` - Static data files (portfolio.ts for work history)
- `src/lib/` - Utility libraries (blog.ts for markdown parsing + Shiki highlighting)
- `content/blog/` - Markdown blog posts with frontmatter (title, date, description, slug)
- `@/*` path alias maps to `./src/*`

### Pages

- `/` - Home page with terminal session layout (whoami, cat, ls navigation)
- `/experience` - Experience page with ASCII timeline, collapsible details, side projects, volunteer, education
- `/blog` - Blog listing page (reads markdown from content/blog/)
- `/blog/[slug]` - Individual blog post pages (statically generated, Shiki syntax highlighting)
- `/contact` - Contact form (uses Netlify Forms, client component)
- `/success` - Form submission success page

### Styling

- Tailwind CSS for all styling
- IBM Plex Mono as the primary font (loaded via `next/font`)
- One Dark theme: custom `onedark-*` colors in tailwind.config.ts
  - bg (#282C34), fg (#ABB2BF), gutter (#636D83), selection (#3E4451), currentline (#2C313A)
  - green (#98C379), yellow (#E5C07B), red (#E06C75), blue (#56B6C2), purple (#C678DD), orange (#D19A66)
- Color mapping: green=home, yellow=experience, blue/teal=blog, red=contact

### Key Components

- `HeaderBar` - Colored accent bar at top of each page (green=home, yellow=experience, blue=blog, red=contact)
- `Header` - Terminal prompt header with `<danielryan.xyz />` branding, `daniel@barcelona:~$` prompt, nav links, social icons
- `ExperienceTimeline` - Client component with ASCII tree timeline and collapsible work experience details

### Configuration

- `vercel.json` - Redirects www to non-www, HSTS headers
- `next.config.mjs` - Allows images from images.unsplash.com
