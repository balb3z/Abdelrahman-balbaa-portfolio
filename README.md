# Abdelrahman Balbaa — Portfolio

Personal portfolio built with Vite, React, TypeScript, Tailwind CSS and Framer Motion.
Live at **https://balb3z.github.io/Abdelrahman-balbaa-portfolio/**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:8080/Abdelrahman-balbaa-portfolio/
npm run build      # production build in dist/
```

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Editing content

All content lives in **`src/data/portfolio.ts`**. Sections render from it, so you don't touch components to update text.

| What | Where in `portfolio.ts` |
| --- | --- |
| Name, bio, contact, social links | `profile` |
| Skills | `skillGroups` |
| Work experience | `experiences` |
| Projects | `projects` |
| Education / certifications / leadership | `education`, `certifications`, `activities` |

### Add a project

Append an object to `projects`:

```ts
{
  slug: "my-project",              // unique; also used for ?project=my-project share links
  title: "My Project",
  year: "2026",
  category: "Machine Learning",
  summary: "One-line card description.",
  description: "Longer paragraph shown in the details modal.",
  features: ["Key feature 1", "Key feature 2"],
  tech: ["Python", "PyTorch"],
  images: [asset("projects/my-project-1.webp"), asset("projects/my-project-2.webp")],
  github: "https://github.com/balb3z/my-project",   // optional
  demo: "https://my-project.vercel.app",           // optional
  featured: true,                                  // big card in "Selected work"; otherwise listed under "More on GitHub"
  accent: 200,                                     // hue for the placeholder cover (0–360)
}
```

### Add or replace project screenshots

1. Drop images in `public/projects/` (WebP or PNG, ~1280px wide, 16:10 works best).
2. Reference them in the project's `images` array with `asset("projects/<file>")`.
3. The first image is the card thumbnail; all images appear in the modal gallery.

Projects with an empty `images` array show a generated placeholder cover.

### Update the CV

Replace `public/cv.pdf` with the new file (keep the name).
