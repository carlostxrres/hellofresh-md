# Button

A Preact port of [shadcn/ui's Button](https://ui.shadcn.com/docs/components/button), without Tailwind, cva or Radix. Same API and same look; the styles live in plain CSS and are injected with `GM_addStyle` when the module is imported.

```tsx
import { Button } from "@/components/ui/Button";

<Button onClick={onClick}>Scrape</Button>
```

## Props

Accepts every native `<button>` attribute (`onClick`, `disabled`, `type`, `aria-*`, …) plus:

| Prop                  | Type                                                                          | Default     | Description                                                             |
| --------------------- | ----------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `variant`             | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style.                                                           |
| `size`                | `"default" \| "sm" \| "lg" \| "icon" \| "icon-sm" \| "icon-lg"`               | `"default"` | Height/padding. The `icon-*` sizes are square, for a lone icon.         |
| `asChild`             | `boolean`                                                                     | `false`     | Render the child element instead of a `<button>` (see below).           |
| `class` / `className` | `string`                                                                      | —           | Extra classes, appended after the variant classes. Both spellings work. |
| `ref`                 | `Ref<HTMLButtonElement>`                                                      | —           | Forwarded to the underlying element.                                    |

`type` defaults to `"button"` so a Button inside a `<form>` never submits by accident. Pass `type="submit"` explicitly when you want that.

The rendered element also carries `data-slot="button"`, `data-variant` and `data-size` attributes, which you can target from CSS.

## Variants

```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
```

| Variant       | Look                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| `default`     | Solid `--primary` background, light text.                              |
| `secondary`   | Solid `--secondary` (light grey) background, dark text.                |
| `outline`     | `--background` fill with a `--input` border; `--accent` fill on hover. |
| `ghost`       | Transparent; `--accent` fill on hover.                                 |
| `link`        | Text only, `--primary` colour, underlined on hover.                    |
| `destructive` | Solid `--destructive` (red) background, white text; red focus ring.    |

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>

<Button size="icon" aria-label="Next"><ArrowRight /></Button>
<Button size="icon-sm" aria-label="Next"><ArrowRight /></Button>
<Button size="icon-lg" aria-label="Next"><ArrowRight /></Button>
```

| Size      | Height            | Padding (inline) |
| --------- | ----------------- | ---------------- |
| `sm`      | 2rem              | 0.75rem          |
| `default` | 2.25rem           | 1rem             |
| `lg`      | 2.5rem            | 1.5rem           |
| `icon-sm` | 2rem × 2rem       | 0                |
| `icon`    | 2.25rem × 2.25rem | 0                |
| `icon-lg` | 2.5rem × 2.5rem   | 0                |

Icon-only buttons have no visible label, so always give them an `aria-label`.

## Icons

Any `<svg>` child is sized to `1rem`, gets `pointer-events: none` and won't shrink. When a button has a direct `<svg>` child, its inline padding is reduced slightly so the icon sits flush (`:has(> svg)`), like shadcn's `has-[>svg]:px-3`.

```tsx
import Loader from "@/components/icons/Loader";

<Button variant="outline" disabled>
  <Loader /> Scraping…
</Button>
```

To opt an SVG out of the automatic 1rem sizing give it a class containing `size-` (e.g. `class="size-6"`) and size it yourself.

## `asChild`

Instead of rendering a `<button>`, pass the button's props and classes to the single child element. Use it to make links, labels, etc. look like buttons while keeping their own semantics.

```tsx
<Button asChild variant="link">
  <a href={pdfUrl} target="_blank" rel="noreferrer">Open PDF</a>
</Button>
```

This is a minimal port of Radix's `Slot`. When merging props onto the child:

- `class` / `className` are concatenated (button classes first, then the child's).
- Event handlers present on both are composed: the child's runs first, then the Button's.
- `style` objects are shallow-merged, the child's keys winning.
- Every other prop on the child overrides the Button's.
- Refs are composed, so both the Button's `ref` and the child's `ref` receive the element.

`type` is not defaulted in `asChild` mode (an `<a>` shouldn't get `type="button"`). The child must be a single element; text or a fragment renders nothing.

## States

| State                 | Behaviour                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| `disabled`            | 50 % opacity and `pointer-events: none`. Also applied for `aria-disabled="true"` and `data-disabled`.  |
| Keyboard focus        | `:focus-visible` shows a 3px ring in `--ring` at 50 % (red for `destructive`). No ring on mouse click. |
| `aria-invalid="true"` | Red border and a 3px `--destructive` ring at 20 %.                                                     |
| Hover                 | Per variant; solid variants fade to 90 % (`secondary`: 80 %).                                          |

## Styling non-Button elements

`buttonClass()` returns the class string for a variant/size, the equivalent of calling shadcn's `buttonVariants()`:

```tsx
import { buttonClass } from "@/components/ui/Button";

<a href="/x" class={buttonClass({ variant: "outline", size: "sm" })}>Docs</a>
```

Also exported: `buttonVariants` (the variant/size → class map), `cn()` (joins truthy class values), and the `ButtonProps`, `ButtonVariant` and `ButtonSize` types.

## Theming

Colours and radius come from CSS custom properties defined on `.hellofresh-md` in [`src/css/global.css`](../../css/global.css), using shadcn's default *neutral* palette in oklch:

```
--background  --foreground
--primary     --primary-foreground
--secondary   --secondary-foreground
--accent      --accent-foreground
--muted       --muted-foreground
--destructive --border  --input  --ring
--radius      (0.625rem; buttons use radius − 2px)
```

Override any of them on `.hellofresh-md` (or a nested wrapper) to retheme every button at once. There is no dark mode: the script's panel is always rendered on a white card, so only the light tokens exist.

All button classes are prefixed `hfmd-btn` to avoid clashing with HelloFresh's own page styles, and the tokens are scoped to the app root so they don't leak into the host page.

## Files

| File         | Purpose                                                            |
| ------------ | ------------------------------------------------------------------ |
| `Button.tsx` | Component, `Slot`, `buttonClass`, `buttonVariants`, `cn`, types.   |
| `Button.css` | Styles; each rule is commented with the Tailwind classes it ports. |
| `Button.md`  | This document.                                                     |

## Differences from shadcn/ui

- No `cva`: `buttonVariants` is a plain object, `buttonClass()` replaces calling `buttonVariants(...)`.
- No Radix: `Slot` is a ~40-line local implementation covering `asChild` only.
- Uses `forwardRef` from `preact/compat` (Preact doesn't pass `ref` as a prop).
- `class` is accepted alongside `className`, as is idiomatic in Preact.
- Light theme only.
