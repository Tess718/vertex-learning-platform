# Implementation prompt: Clerk Authentication Setup

## Goal

Set up Clerk authentication for the Vertex learning platform using the Clerk CLI linked to Clerk application `app_3JSBo4SJh28jgz2OuYesPJ1d36E`. Integrate Clerk into Next.js App Router (v16.3.5) with `<ClerkProvider>` in `app/layout.tsx`, configure `proxy.ts` / `middleware.ts` with Clerk's route and auto-proxy matchers, and integrate polished authentication controls (`SignInButton`, `SignUpButton`, `Show`, `UserButton`) into the main navigation in `components/nav/navbar.tsx`.

## Skills and docs read

- `AGENTS.md` (section 1 What you are building, 2 How to work, 5 Structure, 6 Tech stack, 7 Decisions, 12 Things that will trip you up, 13 Checks).
- `clerk` (`.agents/skills/clerk/SKILL.md`) - Version detection and router.
- `clerk-setup` (`.agents/skills/clerk-setup/SKILL.md`) - Quickstart, ClerkProvider inside `<body>`, `proxy.ts` vs `middleware.ts`, API key management.
- `clerk-cli` (`.agents/skills/clerk-cli/SKILL.md`) - CLI invocation, `clerk init --app`, `clerk doctor`, agent mode safety.
- `clerk-nextjs-patterns` (`.agents/skills/clerk-nextjs-patterns/SKILL.md`) - `<Show>` component, `clerkMiddleware`, matcher config with `'/__clerk/:path*'`.
- Next.js Expert Agent rules: Server-first, strict TypeScript, minimal client JavaScript.

## Code inspected

- `package.json` — Next.js 16.3.5, React 19.2.8, Tailwind v4. No existing Clerk SDK or shadcn/ui (`components.json` is not present).
- `app/layout.tsx` — Root layout with `Playfair_Display` and `Inter` fonts. Needs `<ClerkProvider>` inside `<body>`.
- `components/nav/navbar.tsx` — Navigation bar currently showing a placeholder avatar and bell icon. Needs Clerk auth controls.
- `app/page.tsx` — Home page rendering `Navbar` with `showActions={true}`.
- Running terminal: `npm run dev` running on the host.

## Decisions and assumptions

1. **Clerk CLI installation & linking**:
   - Check if `clerk` is on PATH; if not or stale, install/update globally (`npm install -g clerk`).
   - Run `clerk auth login` if authentication is needed, then initialize with `clerk init --app app_3JSBo4SJh28jgz2OuYesPJ1d36E`.
2. **Provider placement**:
   - Per Next.js & Clerk rules, wrap `{children}` inside `<body>` with `<ClerkProvider>` in `app/layout.tsx` (never wrap `<html>`).
3. **Proxy / Middleware**:
   - Next.js 16 uses `proxy.ts` (or `middleware.ts`). Configure `clerkMiddleware()` with matcher containing `'/(api|trpc)(.*)'` and `'/__clerk/:path*'`.
   - All public browsing routes (`/`, `/courses`, `/search`) remain publicly accessible by default per `AGENTS.md` §7.
4. **Auth Navigation Controls**:
   - In `components/nav/navbar.tsx`:
     - When signed out (`<Show when="signed-out">`): Show styled "Sign In" (`SignInButton`) and "Sign Up" (`SignUpButton`) actions matching Vertex's design language (pill button in primary brand color `#F97316`, secondary ghost styling for sign in).
     - When signed in (`<Show when="signed-in">`): Show notification bell button and Clerk's `<UserButton />` with user profile management.
5. **No shadcn/ui theme package**:
   - `components.json` is not present in the workspace, so `@clerk/ui` shadcn theme is not required.
6. **Environment variables**:
   - `clerk init` / `clerk env pull` writes `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to `.env.local`. Secret keys will remain strictly server-only.

## Files to create or change

```
app/layout.tsx                       wrap body content with ClerkProvider
components/nav/navbar.tsx            integrate SignInButton, SignUpButton, Show, UserButton
proxy.ts (or middleware.ts)          create/verify Clerk middleware with /__clerk/:path* matcher
prompts/clerk-auth.md                implementation prompt
```

## Security considerations

- `CLERK_SECRET_KEY` is strictly kept in `.env.local` on the server and never imported or exposed to client code.
- Only `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` reaches the browser.
- Public routes remain publicly readable per `AGENTS.md` guidelines.
- Do not read, log, or commit any `.env*` secret keys.

## Acceptance criteria

1. Clerk CLI is installed, authenticated, and linked to app `app_3JSBo4SJh28jgz2OuYesPJ1d36E`.
2. `@clerk/nextjs` is installed in `dependencies` in `package.json`.
3. `app/layout.tsx` has `<ClerkProvider>` inside `<body>`.
4. `proxy.ts` (or `middleware.ts`) is configured with `clerkMiddleware()` and matcher includes `'/__clerk/:path*'`.
5. `components/nav/navbar.tsx` renders clear sign-in and sign-up buttons when signed out, and `<UserButton />` when signed in.
6. `clerk doctor` reports passing checks for framework integration.
7. `npx tsc --noEmit` and `npm run lint` pass with 0 errors.

## Checks to run

```bash
clerk doctor
npx tsc --noEmit
npm run lint
```

## Manual test steps

1. Navigate to `http://localhost:3000/`.
2. Verify "Sign In" and "Sign Up" buttons appear in the navigation bar when signed out.
3. Click "Sign Up" to create a test user account in the modal/flow.
4. Verify that once signed in, the UserButton profile avatar appears in the navigation bar.
5. Click the UserButton to ensure the Clerk profile management menu opens properly.
6. Sign out to verify returning to the signed-out state with Sign In / Sign Up buttons.
