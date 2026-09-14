# Tampermonkey script template

A starting point for Tampermonkey userscripts written in TypeScript + Preact,
bundled with Rollup into a single file you paste into the Tampermonkey editor.

## Using this template for a new script

1. Clone or copy this directory for your new script (e.g. `npx degit <this-repo> my-new-script`, or just `cp -r`).
2. Edit [`tm-meta.txt`](tm-meta.txt) — this is the Tampermonkey metadata block (`@name`, `@description`, `@match`, `@grant`, ...) and gets prepended verbatim to the built output.
3. Update `"name"` (and `"description"`) in [`package.json`](package.json).
4. Edit [`src/settings.ts`](src/settings.ts) for the tunable values (refresh interval, cache key prefix, cache TTL).
5. Replace the placeholder in [`src/components/App.tsx`](src/components/App.tsx) with your actual UI.

## Build

```sh
npm install
npm run build   # one-off build -> dist/index.cjs
npm run watch   # rebuild on file change
```

`dist/index.cjs` is the file to paste into the Tampermonkey editor (create a
new script there, replace its contents, save). It already starts with the
`tm-meta.txt` metadata block via Rollup's `banner` option.

## Layout

- `src/index.tsx` — entry point: sets up the refresh timer, injects global CSS, mounts the root component.
- `src/components/` — Preact components. `icons/` holds standalone SVG icon components; `ui/` is for shared, reusable UI pieces (buttons, panels, etc.).
- `src/services/` — self-contained modules with side effects: `storage.ts` (a thin typed wrapper around `GM.getValue`/`GM.setValue`/`GM.deleteValue`), `toast/` (a small toast-notification helper).
- `src/fetch/` — network requests (`GM.xmlHttpRequest` calls, API wrappers).
- `src/get/` — DOM scraping / reading values out of the host page.
- `src/types/` — shared TypeScript types and runtime type guards (see `is.ts`).
- `src/utils.ts` — generic helpers (time formatting, `waitForElement`, `sleep`, `escapeHtml`, ...) with no domain logic.
- `src/settings.ts` — tunable constants you're expected to edit per script.
- `src/constants.ts` — fixed values that aren't meant to be tuned.

## Path alias

`@/...` resolves to `src/...` (configured in both `tsconfig.json` and
`rollup.config.mjs`), e.g. `import { sleep } from "@/utils"`.
