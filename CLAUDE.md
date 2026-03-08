# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

This is a personal website built with Next.js 14 (App Router) and TypeScript. Deployed on AWS Amplify.

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
- `/contact` - Contact form (client component, needs backend integration)
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

### Contact Form Backend (Terraform)

- `terraform/` - Modular Terraform for AWS contact form backend
  - `modules/ses/` - SES domain identity and DKIM verification
  - `modules/lambda/` - Lambda function with IAM roles (least privilege)
  - `modules/api-gateway/` - HTTP API v2 with CORS and Lambda integration
  - `lambda/contact/index.mjs` - Node.js 20 Lambda handler (validates, sends email via SES)
- Deploy: `cd terraform && terraform init && terraform plan -var-file=terraform.tfvars`
- Requires: `terraform.tfvars` (copy from `terraform.tfvars.example`)
- API endpoint output used by `/contact` page to POST form submissions

### Configuration

- `amplify.yml` - AWS Amplify build spec (Node 20, HSTS headers, build cache)
- `vercel.json` - Legacy config (www->non-www redirect configured in Amplify Console instead)
- `next.config.mjs` - Allows images from images.unsplash.com
