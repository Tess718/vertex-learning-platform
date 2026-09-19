# Implementation prompt: Vertex Home Page

## Goal

Implement the Vertex Home Page at `app/page.tsx` matching `design/vertex-home.png` with pixel-perfect fidelity: responsive navigation header, centered hero with "INTELLIGENT LEARNING" badge, Playfair Display headline, subtitle, "Explore Courses" button, large search input, "All Courses" 3-card showcase with custom icons and metadata, weekly update banner, and bottom gradient graphic.

## Skills and docs read

- `AGENTS.md` (section 1 What you are building, 2 How to work, 3 UI work, 5 Structure, 6 Tech stack, 7 Decisions, 13 Checks).
- Next.js Expert Agent rules: Server Component by default, minimal client JavaScript, strict TypeScript.
- Tailwind v4 design tokens configured in `app/globals.css`.

## Code inspected

- `design/vertex-home.png` — the desktop visual reference image.
- `app/page.tsx` — current Create Next App boilerplate to be replaced.
- `components/brand/logo.tsx` — `VertexLogo` and `VertexLogoMark`.
- `components/ui/button.tsx` — `Button` component with primary, secondary, and text variants.
- `components/ui/badge.tsx` — `Badge` component.
- `components/cards/course-card.tsx` — `CourseCard` component.
- `components/nav/navbar.tsx` — `Navbar` navigation component.

## Decisions and assumptions

1. **Server-first rendering**: `app/page.tsx` is a Server Component.
2. **Header navigation**: Extends `Navbar` to support right-side actions: notification bell icon (presentational per AGENTS.md §7) and user profile avatar.
3. **Hero section**:
   - Centered container with subtle ambient warm glow.
   - Badge: "INTELLIGENT LEARNING" in uppercase, tracked, `text-primary-500 bg-primary-100/60 border border-primary-200 rounded-md py-1 px-3.5 text-xs font-semibold`.
   - Heading: "Search your learning in plain English." in Playfair Display (`font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 leading-[1.15]`).
   - Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." in `text-neutral-500 text-base md:text-lg max-w-xl font-sans leading-relaxed`.
   - CTA: `Button` with "Explore Courses" and right arrow icon linking to `/courses`.
   - Search bar: 56px height, rounded-xl, 1px border `border-neutral-200`, shadow-sm, leading search icon, placeholder "Ask anything about your learning...", trailing `⌘ K` keyboard shortcut badge. Navigates to `/search?q=...` on submit.
4. **All Courses section**:
   - Section header: "All Courses" in Playfair Display (`font-display font-bold text-2xl text-neutral-900`) and "View all courses →" link in `text-primary-500 hover:text-primary-600 font-sans text-sm font-medium`.
   - 3-card responsive grid (`grid-cols-1 md:grid-cols-3 gap-6`):
     - Card 1: **Next.js for Production** with black rounded-xl "N" logo, "Build scalable, high-performance web applications with Next.js.", Intermediate, 18h 24m, 12 modules.
     - Card 2: **Docker Essentials** with blue Docker whale logo, "Containerize applications and streamline your development workflow.", Beginner, 10h 12m, 8 modules.
     - Card 3: **TypeScript Deep Dive** with blue rounded-xl "TS" logo, "Go beyond the basics and write safer, more expressive code.", Intermediate, 14h 36m, 10 modules.
   - Course titles styled with Playfair Display (`font-display font-bold text-lg text-neutral-900`) matching the reference.
5. **Weekly update banner**:
   - Orange hollow star icon (`Star` in `text-primary-500`), centered text "New courses and lessons added every week." in `text-neutral-700 text-sm font-sans`, flanked by subtle divider lines.
6. **Bottom decorative graphic**:
   - Symmetrical gradient bar illustration at the bottom of the page reproducing the warm orange vertical city-scape bars from the reference image using CSS gradients.
7. **Responsive design**:
   - Stacks gracefully to single column on mobile screens (<768px), maintaining desktop metrics and proportions at 1024px+.

## Files to create or change

```
app/page.tsx                         replace boilerplate with full Vertex Home Page
components/nav/navbar.tsx            add right-side items (bell icon, user avatar)
components/cards/course-card.tsx     support font-display option and custom logos
components/home/hero-search.tsx      client search bar with keyboard shortcut and redirect
prompts/home-page.md                 implementation prompt
```

## Security considerations

Server-first implementation. No tokens or secrets in client bundle. Search input sanitized when submitting query parameter. All external links use safe attributes.

## Acceptance criteria

1. Home page at `/` matches `design/vertex-home.png` in layout, spacing, typography, colors, and components.
2. Header shows Vertex logo, nav links (Courses, My Learning), notification bell, and user avatar.
3. Hero shows "INTELLIGENT LEARNING" badge, Playfair Display title, subtitle, Explore Courses button, and search input with ⌘K badge.
4. "All Courses" section renders 3 courses with correct icons (Next.js, Docker, TypeScript), descriptions, and metadata.
5. Weekly update banner with star icon and divider lines is rendered.
6. Bottom warm gradient bars graphic is rendered.
7. `npx tsc --noEmit` and `npm run lint` pass with 0 errors.

## Checks to run

```bash
npx tsc --noEmit
npm run lint
```

## Manual test steps

1. Visit `http://localhost:3000/`.
2. Verify visual match with `design/vertex-home.png` from header to bottom illustration.
3. Test search input typing and Enter key submission.
4. Test "Explore Courses" and "View all courses" links.
5. Resize browser to mobile (375px) and tablet (768px) to verify responsive stacking.
