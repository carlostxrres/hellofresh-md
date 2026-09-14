import type { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { cn } from "@/components/ui/Button";
import css from "./Separator.css";

GM_addStyle(css);

// ---------------------------------------------------------------------------
// Variants (mirrors shadcn/ui's data-[orientation=…] classes, without tailwind)
// ---------------------------------------------------------------------------

export const separatorVariants = {
  orientation: {
    horizontal: "hfmd-separator--horizontal",
    vertical: "hfmd-separator--vertical",
  },
} as const;

export type SeparatorOrientation = keyof typeof separatorVariants.orientation;

type ClassValue = string | false | null | undefined;

/** Returns the class string for a given orientation — handy for styling a
 *  non-Separator element (e.g. an `<hr>`) like a separator. */
export function separatorClass({
  orientation = "horizontal",
  class: className,
}: {
  orientation?: SeparatorOrientation;
  class?: ClassValue;
} = {}): string {
  return cn(
    "hfmd-separator",
    separatorVariants.orientation[orientation],
    className,
  );
}

// ---------------------------------------------------------------------------
// Separator (minimal port of @radix-ui/react-separator)
// ---------------------------------------------------------------------------

export type SeparatorProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "class" | "className"
> & {
  orientation?: SeparatorOrientation;
  /** Purely visual separator (`role="none"`). Set to `false` when the line
   *  carries meaning for assistive tech, to get `role="separator"`. */
  decorative?: boolean;
  class?: ClassValue;
  className?: ClassValue;
};

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  function Separator(
    {
      orientation = "horizontal",
      decorative = true,
      class: classProp,
      className,
      ...props
    },
    ref,
  ) {
    // Radix: decorative → role="none"; semantic → role="separator" with
    // aria-orientation only for vertical (horizontal is the ARIA default).
    const a11y = decorative
      ? { role: "none" as const }
      : {
          role: "separator" as const,
          "aria-orientation":
            orientation === "vertical" ? ("vertical" as const) : undefined,
        };

    return (
      <div
        ref={ref}
        data-slot="separator"
        data-orientation={orientation}
        class={separatorClass({ orientation, class: cn(classProp, className) })}
        {...a11y}
        {...props}
      />
    );
  },
);

export default Separator;
