# AGENTS.md — project conventions

## Project
- Name: Irina International Tours
- Developer: James (Kim Consultant)
- Stack: React 19, Vite 6, TypeScript (strict), Tailwind CSS v4, Motion, React Router 7
- Repo: github.com/HamesInFlames/Irina-International-Tours
- State: mock site. Forms and bookings are not connected to a server.

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (type-check + vite build)
- Test: none
- Lint: none
- Typecheck: `npm run typecheck`

## Code conventions
- TypeScript strict mode, with `noUnusedLocals` and `noUnusedParameters`
- Tailwind v4 design tokens live in `src/index.css`
- Keep the original brand colors (navy, teal, coral); see README
- Text is bilingual EN / RU: strings go in `src/i18n/dict.ts`
- Mock content lives in `src/data/`; contact details and nav in `src/site.ts`
- Page components in `src/pages/`, shared components in `src/components/`

## Workflow
- Read tasks/todo.md before starting work
- Update tasks/status.md after each session
- Log decisions in tasks/decisions.md
- Run `npm run build` before committing

## Do NOT
- Change existing styling, copy or behaviour the task did not ask about
- Install packages without documenting in tasks/decisions.md
- Modify deployment config without approval
- Delete .env files

## Lessons
<!-- added by /kc-workflow:reflect -->
