# Alert Dialog

A Preact port of [shadcn/ui's Alert Dialog](https://ui.shadcn.com/docs/components/base/alert-dialog), without Tailwind or Radix. Same API and same look; the styles live in plain CSS and are injected with `GM_addStyle` when the module is imported.

A modal dialog that interrupts the user with important content and expects a response. It renders a native `<dialog>` opened with `showModal()`, so the browser handles the top layer, the focus trap and the inert background.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { Button } from "@/components/ui/Button";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Parts

| Part                     | Renders                       | Purpose                                                                          |
| ------------------------ | ----------------------------- | -------------------------------------------------------------------------------- |
| `AlertDialog`            | nothing (context)             | Holds the open state and wires the parts together.                               |
| `AlertDialogTrigger`     | `<button>`                    | Opens the dialog on click.                                                       |
| `AlertDialogContent`     | `<dialog role="alertdialog">` | The modal panel; also paints the overlay (`::backdrop`).                         |
| `AlertDialogHeader`      | `<div>`                       | Lays out media, title and description.                                           |
| `AlertDialogMedia`       | `<div>`                       | Optional 4rem square icon/image slot inside the header.                          |
| `AlertDialogTitle`       | `<h2>`                        | Labels the dialog (`aria-labelledby`).                                           |
| `AlertDialogDescription` | `<p>`                         | Describes the dialog (`aria-describedby`).                                       |
| `AlertDialogFooter`      | `<div>`                       | Lays out the buttons.                                                            |
| `AlertDialogCancel`      | `Button` (`outline`)          | Closes the dialog. Receives focus when the dialog opens.                         |
| `AlertDialogAction`      | `Button` (`default`)          | Closes the dialog. Put your confirm handler in its `onClick`.                    |

Every part carries `data-slot="alert-dialog-…"`, which you can target from CSS. All parts except `AlertDialog` forward their `ref` to the rendered element.

## Props

### `AlertDialog`

| Prop           | Type                      | Default | Description                                                                              |
| -------------- | ------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `open`         | `boolean`                 | —       | Controlled open state.                                                                   |
| `defaultOpen`  | `boolean`                 | `false` | Initial state when uncontrolled.                                                         |
| `onOpenChange` | `(open: boolean) => void` | —       | Called when the dialog wants to open or close (trigger, action, cancel, Escape).         |

### `AlertDialogTrigger`

Accepts every native `<button>` attribute plus:

| Prop                  | Type      | Default | Description                                                          |
| --------------------- | --------- | ------- | -------------------------------------------------------------------- |
| `asChild`             | `boolean` | `false` | Render the child element instead of a `<button>` (Button's `Slot`).  |
| `class` / `className` | `string`  | —       | Extra classes. Both spellings work.                                  |

The rendered element gets `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls` and `data-state="open" | "closed"`. `type` defaults to `"button"` (not in `asChild` mode).

### `AlertDialogContent`

Accepts every native `<dialog>` attribute (except `open`, which is managed) plus:

| Prop                  | Type                | Default     | Description                                                          |
| --------------------- | ------------------- | ----------- | -------------------------------------------------------------------- |
| `size`                | `"default" \| "sm"` | `"default"` | Width and layout, see below.                                         |
| `class` / `className` | `string`            | —           | Extra classes, appended after `hfmd-alert-dialog`. Both spellings work. |

The rendered `<dialog>` gets `data-size` and `data-state="open" | "closed"`.

### `AlertDialogAction` / `AlertDialogCancel`

Both take every [`Button`](./Button.md) prop (`variant`, `size`, `asChild`, …). `Action` defaults to `variant="default"`, `Cancel` to `variant="outline"`. Both close the dialog after your `onClick` runs, unless it called `event.preventDefault()`.

```tsx
<AlertDialogAction variant="destructive" onClick={deleteRecipe}>
  Delete
</AlertDialogAction>
```

### `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogMedia`, `AlertDialogTitle`, `AlertDialogDescription`

Accept every native attribute of the element they render plus `class` / `className`.

## Sizes

```tsx
<AlertDialogContent>…</AlertDialogContent>
<AlertDialogContent size="sm">…</AlertDialogContent>
```

| Size      | Max width                               | Header                                        | Footer                                             |
| --------- | --------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| `default` | `100% − 2rem`, `32rem` from 640px up    | Centred; left-aligned from 640px up           | Stacked (action on top); row, right-aligned from 640px up |
| `sm`      | `20rem`                                 | Always centred                                | Two equal columns                                  |

## Media

`AlertDialogMedia` is an optional slot for an icon or image, placed before the title inside the header. It's a 4rem square with a `--muted` background and a rounded corner; a direct `<svg>` child is sized to 2rem (opt out with a class containing `size-`, like Button).

```tsx
import { Trash2 } from "lucide-preact";

<AlertDialogHeader>
  <AlertDialogMedia><Trash2 /></AlertDialogMedia>
  <AlertDialogTitle>Delete recipe?</AlertDialogTitle>
  <AlertDialogDescription>This can't be undone.</AlertDialogDescription>
</AlertDialogHeader>
```

With `size="default"` on wide viewports the media sits to the left, spanning the title and description rows; otherwise it stacks above them, centred.

## Controlled usage

```tsx
const [open, setOpen] = useState(false);

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogTrigger asChild><Button>Reset</Button></AlertDialogTrigger>
  <AlertDialogContent>…</AlertDialogContent>
</AlertDialog>
```

You can also skip the trigger entirely and open the dialog from code (`setOpen(true)`), e.g. after a scrape produced warnings.

## Behaviour

| Interaction              | Behaviour                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Open                     | The `<dialog>` is mounted and `showModal()` is called; focus moves to `AlertDialogCancel` (or the first focusable element). |
| Escape                   | Closes (via `onOpenChange(false)`).                                                                                        |
| Click outside            | Does **not** close; an alert dialog requires an explicit answer (same as Radix).                                           |
| Tab / Shift+Tab          | Loops within the dialog. The rest of the page is inert while open.                                                         |
| Close                    | The exit animation plays, then the `<dialog>` is closed and unmounted; focus returns to the element that opened it.        |
| Page scroll              | `document.body` gets `overflow: hidden` while open, restored on close.                                                     |
| Reduced motion           | Animations are disabled and the dialog closes immediately.                                                                 |

Every close path goes through `onOpenChange`, so a controlled parent always stays in sync — including when the browser force-closes the dialog (Chrome's close watcher can ignore a second Escape's `preventDefault`).

## Accessibility

The content is a `<dialog role="alertdialog">` linked to its title and description through `aria-labelledby` / `aria-describedby` (IDs come from `useId()`, so several dialogs can coexist). Always include an `AlertDialogTitle`; keep the `AlertDialogDescription` too unless the title says it all.

Because a modal `<dialog>` makes the rest of the document inert, assistive tech can't reach the HelloFresh page or the panel behind it until the dialog closes.

## Theming

Colours and radius come from the CSS custom properties on `.hellofresh-md` in [`src/css/global.css`](../../css/global.css):

```
--background  --foreground        (content)
--border                          (content border)
--muted       --muted-foreground  (media background, description text)
--radius      (0.625rem; content uses it as-is, media uses radius − 2px)
```

The overlay is a fixed `rgb(0 0 0 / 0.5)` (`bg-black/50`), painted by the `<dialog>`'s `::backdrop`. Because the dialog stays inside the app root in the DOM (the top layer is a rendering concept, not a DOM move), the tokens apply without any portal.

All classes are prefixed `hfmd-alert-dialog` to avoid clashing with HelloFresh's own page styles. Light theme only, like the rest of the tokens.

## Files

| File              | Purpose                                                            |
| ----------------- | ------------------------------------------------------------------ |
| `AlertDialog.tsx` | All parts, context, props types.                                   |
| `AlertDialog.css` | Styles; each rule is commented with the Tailwind classes it ports. |
| `AlertDialog.md`  | This document.                                                     |

## Differences from shadcn/ui

- No Radix / Base UI: the primitive is the native `<dialog>` element. It supplies the top layer (above the panel's `z-index: 99999` and anything on the host page), focus trapping, focus return, the inert background and Escape handling, so none of that is reimplemented.
- No `AlertDialogPortal` or `AlertDialogOverlay`: the dialog needs no portal (see Theming) and the overlay is `::backdrop`, styled in `AlertDialog.css`. `AlertDialogContent` is the whole thing.
- `AlertDialogTrigger` uses `asChild` (Radix style) rather than Base UI's `render` prop, for consistency with [`Button`](./Button.md).
- `AlertDialogAction` / `AlertDialogCancel` are `Button`s directly (shadcn wraps the Radix primitive in a `Button` via `asChild`); the outcome is the same element.
- Exit animations are awaited with `Element.getAnimations()` instead of Radix's `Presence`.
- Uses `forwardRef` from `preact/compat` (Preact doesn't pass `ref` as a prop).
- `class` is accepted alongside `className`, as is idiomatic in Preact.
- Light theme only.
