import { cloneElement, isValidElement, toChildArray } from "preact";
import type { ComponentChildren, JSX, Ref, RefObject, VNode } from "preact";
import { forwardRef } from "preact/compat";
import css from "./Button.css";

GM_addStyle(css);

// ---------------------------------------------------------------------------
// Variants (mirrors shadcn/ui `buttonVariants`, without cva/tailwind)
// ---------------------------------------------------------------------------

export const buttonVariants = {
  variant: {
    default: "hfmd-btn--default",
    destructive: "hfmd-btn--destructive",
    outline: "hfmd-btn--outline",
    secondary: "hfmd-btn--secondary",
    ghost: "hfmd-btn--ghost",
    link: "hfmd-btn--link",
  },
  size: {
    default: "hfmd-btn--size-default",
    sm: "hfmd-btn--size-sm",
    lg: "hfmd-btn--size-lg",
    icon: "hfmd-btn--size-icon",
    "icon-sm": "hfmd-btn--size-icon-sm",
    "icon-lg": "hfmd-btn--size-icon-lg",
  },
} as const;

export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;

type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Returns the class string for a given variant/size — handy for styling
 *  non-Button elements (e.g. an `<a>`) like a button. */
export function buttonClass({
  variant = "default",
  size = "default",
  class: className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  class?: ClassValue;
} = {}): string {
  return cn(
    "hfmd-btn",
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    className,
  );
}

// ---------------------------------------------------------------------------
// Slot (minimal port of @radix-ui/react-slot for `asChild`)
// ---------------------------------------------------------------------------

type AnyProps = Record<string, unknown>;

function setRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as RefObject<T | null>).current = value;
}

function composeRefs<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
  return (value) => refs.forEach((ref) => setRef(ref, value));
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps): AnyProps {
  const overrides: AnyProps = {};

  for (const name of Object.keys(slotProps)) {
    const slotValue = slotProps[name];
    const childValue = childProps[name];
    const isHandler = /^on[A-Z]/.test(name);

    if (isHandler) {
      if (typeof slotValue === "function" && typeof childValue === "function") {
        overrides[name] = (...args: unknown[]) => {
          childValue(...args);
          slotValue(...args);
        };
      } else if (typeof slotValue === "function") {
        overrides[name] = slotValue;
      }
    } else if (name === "style") {
      overrides[name] =
        typeof slotValue === "object" && typeof childValue === "object"
          ? { ...(slotValue as object), ...(childValue as object) }
          : childValue ?? slotValue;
    }
  }

  return { ...slotProps, ...childProps, ...overrides };
}

// `any` element type: the slot adopts whatever element its child renders.
export const Slot = forwardRef<any, AnyProps & { children?: ComponentChildren }>(
  function Slot({ children, ...slotProps }, ref) {
    const child = toChildArray(children).find(isValidElement) as
      | VNode<AnyProps>
      | undefined;

    if (!child) return null;

    const childProps = child.props;
    const merged = mergeProps(slotProps, childProps);

    // Preact accepts both `class` and `className`; cloneElement merges over
    // the child's props, so set both keys to the combined value so neither
    // stale one wins.
    if ("class" in merged || "className" in merged) {
      const combined = cn(
        (slotProps.class ?? slotProps.className) as ClassValue,
        (childProps.class ?? childProps.className) as ClassValue,
      );
      merged.class = combined;
      merged.className = combined;
    }

    return cloneElement(child, {
      ...merged,
      ref: composeRefs(ref, child.ref as Ref<any> | undefined),
    });
  },
);

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

export type ButtonProps = Omit<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>,
  "size" | "class" | "className"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render the child element instead of a `<button>`, passing it the
   *  button's props/classes (same as shadcn's Radix `Slot`). */
  asChild?: boolean;
  class?: ClassValue;
  className?: ClassValue;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "default",
    size = "default",
    asChild = false,
    class: classProp,
    className,
    type,
    ...props
  },
  ref,
) {
  const shared = {
    "data-slot": "button",
    "data-variant": variant,
    "data-size": size,
    class: buttonClass({ variant, size, class: cn(classProp, className) }),
    ...props,
  };

  if (asChild) {
    return <Slot ref={ref} type={type} {...shared} />;
  }

  // Default to "button" so it never accidentally submits a form.
  return <button ref={ref} type={type ?? "button"} {...shared} />;
});

export default Button;
