# Separator

A Preact port of [shadcn/ui's Separator](https://ui.shadcn.com/docs/components/separator), without Tailwind or Radix. Same API and same look; the styles live in plain CSS and are injected with `GM_addStyle` when the module is imported.

```tsx
import { Separator } from "@/components/ui/Separator";

<div>
  <h4>Recipe</h4>
  <p>Scrape this page into a Markdown file.</p>
</div>
<Separator />
<Button>Scrape</Button>
```

## Props

Accepts every native `<div>` attribute (`style`, `aria-*`, `data-*`, …) plus:

| Prop                  | Type                         | Default        | Description                                                                      |
| --------------------- | ---------------------------- | -------------- | -------------------------------------------------------------------------------- |
| `orientation`         | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the line.                                                           |
| `decorative`          | `boolean`                    | `true`         | Purely visual (`role="none"`). Set to `false` for a semantic `role="separator"`. |
| `class` / `className` | `string`                     | —              | Extra classes, appended after the orientation class. Both spellings work.        |
| `ref`                 | `Ref<HTMLDivElement>`        | —              | Forwarded to the underlying element.                                             |

The rendered element carries `data-slot="separator"` and `data-orientation` attributes, which you can target from CSS.

## Orientation

```tsx
<Separator />

<div style="display: flex; height: 1.25rem; align-items: center; gap: 1rem">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>
```

| Orientation  | Size                    |
| ------------ | ----------------------- |
| `horizontal` | `1px` tall, `100%` wide |
| `vertical`   | `100%` tall, `1px` wide |

A vertical separator is `height: 100%`, so its parent needs an explicit height (or be a flex container with `align-items: stretch`) for the line to show.

## Accessibility

By default the separator is decorative: it renders with `role="none"` and is invisible to assistive tech. Pass `decorative={false}` when the line actually divides content in a meaningful way; it then gets `role="separator"`, plus `aria-orientation="vertical"` when vertical (horizontal is the ARIA default, so it's omitted, as Radix does).

## Styling non-Separator elements

`separatorClass()` returns the class string for an orientation:

```tsx
import { separatorClass } from "@/components/ui/Separator";

<hr class={separatorClass()} />
```

Also exported: `separatorVariants` (the orientation → class map) and the `SeparatorProps` and `SeparatorOrientation` types. `cn()` is reused from [`Button.tsx`](./Button.tsx).

## Theming

The line colour is `--border`, defined on `.hellofresh-md` in [`src/css/global.css`](../../css/global.css). Override it there (or on a nested wrapper) to retheme every separator at once, or pass a `class` with a different `background-color` for a one-off. Light theme only, like the rest of the tokens.

All classes are prefixed `hfmd-separator` to avoid clashing with HelloFresh's own page styles.

## Files

| File            | Purpose                                                            |
| --------------- | ------------------------------------------------------------------ |
| `Separator.tsx` | Component, `separatorClass`, `separatorVariants`, types.           |
| `Separator.css` | Styles; each rule is commented with the Tailwind classes it ports. |
| `Separator.md`  | This document.                                                     |

## Differences from shadcn/ui

- No Radix: the `role` / `aria-orientation` logic of `@radix-ui/react-separator` is inlined (~5 lines).
- `separatorVariants` is a plain object; `separatorClass()` builds the class string.
- Uses `forwardRef` from `preact/compat` (Preact doesn't pass `ref` as a prop).
- `class` is accepted alongside `className`, as is idiomatic in Preact.
- Light theme only.
