import { createContext } from "preact";
import type { ComponentChildren, JSX } from "preact";
import { forwardRef } from "preact/compat";
import {
  useCallback,
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "preact/hooks";
import { Button, Slot, cn } from "@/components/ui/Button";
import type { ButtonProps } from "@/components/ui/Button";
import css from "./AlertDialog.css";

GM_addStyle(css);

type ClassValue = string | false | null | undefined;

export type AlertDialogSize = "default" | "sm";

// ---------------------------------------------------------------------------
// Root / context (minimal port of @radix-ui/react-alert-dialog's Root)
// ---------------------------------------------------------------------------

type AlertDialogContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contentId: string;
  titleId: string;
  descriptionId: string;
};

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

function useAlertDialogContext(part: string): AlertDialogContextValue {
  const ctx = useContext(AlertDialogContext);
  if (!ctx) {
    throw new Error(`<${part}> must be used within <AlertDialog>`);
  }
  return ctx;
}

export type AlertDialogProps = {
  /** Controlled open state. */
  open?: boolean;
  /** Initial open state when uncontrolled. */
  defaultOpen?: boolean;
  /** Called whenever the dialog asks to open or close (trigger, action,
   *  cancel, Escape). In controlled mode, update `open` here. */
  onOpenChange?: (open: boolean) => void;
  children?: ComponentChildren;
};

export function AlertDialog({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: AlertDialogProps) {
  // Radix `useControllableState`: the prop wins when provided.
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      if (next !== open) onOpenChange?.(next);
    },
    [isControlled, open, onOpenChange],
  );

  const id = useId();

  return (
    <AlertDialogContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        contentId: `${id}-content`,
        titleId: `${id}-title`,
        descriptionId: `${id}-description`,
      }}
    >
      {children}
    </AlertDialogContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Trigger
// ---------------------------------------------------------------------------

export type AlertDialogTriggerProps = Omit<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>,
  "class" | "className"
> & {
  /** Render the child element instead of a `<button>`, passing it the
   *  trigger's props (same as shadcn's Radix `Slot`). */
  asChild?: boolean;
  class?: ClassValue;
  className?: ClassValue;
};

export const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  AlertDialogTriggerProps
>(function AlertDialogTrigger(
  { asChild = false, class: classProp, className, onClick, type, ...props },
  ref,
) {
  const ctx = useAlertDialogContext("AlertDialogTrigger");

  const shared = {
    "data-slot": "alert-dialog-trigger",
    "data-state": ctx.open ? "open" : "closed",
    "aria-haspopup": "dialog" as const,
    "aria-expanded": ctx.open,
    "aria-controls": ctx.contentId,
    class: cn(classProp, className) || undefined,
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) ctx.onOpenChange(true);
    },
    ...props,
  };

  if (asChild) {
    return <Slot ref={ref} type={type} {...shared} />;
  }

  return <button ref={ref} type={type ?? "button"} {...shared} />;
});

// ---------------------------------------------------------------------------
// Content (a native <dialog> in place of Portal + Overlay + Content)
// ---------------------------------------------------------------------------

export type AlertDialogContentProps = Omit<
  JSX.DialogHTMLAttributes<HTMLDialogElement>,
  "open" | "class" | "className"
> & {
  size?: AlertDialogSize;
  class?: ClassValue;
  className?: ClassValue;
};

const TABBABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getTabbables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR)).filter(
    (el) => el.getClientRects().length > 0,
  );
}

export const AlertDialogContent = forwardRef<
  HTMLDialogElement,
  AlertDialogContentProps
>(function AlertDialogContent(
  {
    size = "default",
    class: classProp,
    className,
    onCancel,
    onClose,
    onKeyDown,
    ...props
  },
  ref,
) {
  const ctx = useAlertDialogContext("AlertDialogContent");
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Presence: stay mounted while the exit animation plays.
  const [mounted, setMounted] = useState(ctx.open);

  // The <dialog> is unmounted while closed, so re-expose it on each mount.
  useImperativeHandle(ref, () => dialogRef.current!, [mounted]);
  useLayoutEffect(() => {
    if (ctx.open) setMounted(true);
  }, [ctx.open]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !mounted) return;

    if (ctx.open) {
      if (!dialog.open) dialog.showModal();
      // Radix focuses the Cancel button on open, so the destructive action
      // is never the default.
      dialog
        .querySelector<HTMLElement>('[data-slot="alert-dialog-cancel"]')
        ?.focus();
      return;
    }

    // Closing: `data-state="closed"` has just been rendered, so the exit
    // animations are running. Close the <dialog> once they finish (or
    // immediately when there are none, e.g. reduced motion).
    let cancelled = false;
    const animations = dialog.getAnimations({ subtree: true });
    Promise.allSettled(animations.map((a) => a.finished)).then(() => {
      if (cancelled) return;
      dialog.close();
      setMounted(false);
    });
    return () => {
      cancelled = true;
    };
  }, [ctx.open, mounted]);

  // Lock scrolling of the host page while open (Radix: react-remove-scroll).
  useEffect(() => {
    if (!ctx.open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [ctx.open]);

  if (!mounted) return null;

  return (
    <dialog
      ref={dialogRef}
      id={ctx.contentId}
      role="alertdialog"
      aria-labelledby={ctx.titleId}
      aria-describedby={ctx.descriptionId}
      data-slot="alert-dialog-content"
      data-size={size}
      data-state={ctx.open ? "open" : "closed"}
      class={cn("hfmd-alert-dialog", classProp, className)}
      // Escape (and other close requests) fire `cancel`: keep the <dialog>
      // open so the exit animation can play, and go through the state.
      onCancel={(event) => {
        onCancel?.(event);
        event.preventDefault();
        ctx.onOpenChange(false);
      }}
      // If the browser closed it anyway (e.g. Chrome's close watcher
      // ignoring a second Escape's preventDefault), keep state in sync.
      onClose={(event) => {
        onClose?.(event);
        ctx.onOpenChange(false);
      }}
      // A modal <dialog> already keeps focus out of the page, but Tab from
      // the last control goes to the browser UI; loop like Radix instead.
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented || event.key !== "Tab") return;
        const tabbables = getTabbables(event.currentTarget);
        if (tabbables.length === 0) return;
        const first = tabbables[0];
        const last = tabbables[tabbables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Layout parts
// ---------------------------------------------------------------------------

type DivProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "class" | "className"> & {
  class?: ClassValue;
  className?: ClassValue;
};

export type AlertDialogHeaderProps = DivProps;
export type AlertDialogFooterProps = DivProps;
export type AlertDialogMediaProps = DivProps;

export const AlertDialogHeader = forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
  function AlertDialogHeader({ class: classProp, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-dialog-header"
        class={cn("hfmd-alert-dialog-header", classProp, className)}
        {...props}
      />
    );
  },
);

export const AlertDialogFooter = forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  function AlertDialogFooter({ class: classProp, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-dialog-footer"
        class={cn("hfmd-alert-dialog-footer", classProp, className)}
        {...props}
      />
    );
  },
);

export const AlertDialogMedia = forwardRef<HTMLDivElement, AlertDialogMediaProps>(
  function AlertDialogMedia({ class: classProp, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-dialog-media"
        class={cn("hfmd-alert-dialog-media", classProp, className)}
        {...props}
      />
    );
  },
);

export type AlertDialogTitleProps = Omit<
  JSX.HTMLAttributes<HTMLHeadingElement>,
  "class" | "className"
> & {
  class?: ClassValue;
  className?: ClassValue;
};

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  function AlertDialogTitle({ class: classProp, className, ...props }, ref) {
    const ctx = useAlertDialogContext("AlertDialogTitle");
    return (
      <h2
        ref={ref}
        id={ctx.titleId}
        data-slot="alert-dialog-title"
        class={cn("hfmd-alert-dialog-title", classProp, className)}
        {...props}
      />
    );
  },
);

export type AlertDialogDescriptionProps = Omit<
  JSX.HTMLAttributes<HTMLParagraphElement>,
  "class" | "className"
> & {
  class?: ClassValue;
  className?: ClassValue;
};

export const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(function AlertDialogDescription(
  { class: classProp, className, ...props },
  ref,
) {
  const ctx = useAlertDialogContext("AlertDialogDescription");
  return (
    <p
      ref={ref}
      id={ctx.descriptionId}
      data-slot="alert-dialog-description"
      class={cn("hfmd-alert-dialog-description", classProp, className)}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Action / Cancel (Buttons that close the dialog)
// ---------------------------------------------------------------------------

export type AlertDialogActionProps = ButtonProps;
export type AlertDialogCancelProps = ButtonProps;

export const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  function AlertDialogAction({ variant = "default", onClick, ...props }, ref) {
    const ctx = useAlertDialogContext("AlertDialogAction");
    return (
      <Button
        ref={ref}
        variant={variant}
        data-slot="alert-dialog-action"
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) ctx.onOpenChange(false);
        }}
        {...props}
      />
    );
  },
);

export const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  function AlertDialogCancel({ variant = "outline", onClick, ...props }, ref) {
    const ctx = useAlertDialogContext("AlertDialogCancel");
    return (
      <Button
        ref={ref}
        variant={variant}
        data-slot="alert-dialog-cancel"
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) ctx.onOpenChange(false);
        }}
        {...props}
      />
    );
  },
);

export default AlertDialog;
