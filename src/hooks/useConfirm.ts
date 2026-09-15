import { useCallback, useRef, useState } from "preact/hooks";

export function useConfirm() {
    const [open, setOpen] = useState(false);
    const resolver = useRef<((ok: boolean) => void) | null>(null);

    // Resolve once and forget, so a later close can't resolve again.
    const settle = (ok: boolean) => {
        resolver.current?.(ok);
        resolver.current = null;
        setOpen(false);
    };

    const confirm = useCallback(() => {
        setOpen(true);
        return new Promise<boolean>((resolve) => { resolver.current = resolve; });
    }, []);

    return {
        confirm,
        // Props for <AlertDialog>: any close that isn't the Action (Cancel,
        // Escape, browser force-close) counts as "no".
        dialogProps: {
            open,
            onOpenChange: (o: boolean) => {
                if (!o) {
                    settle(false);
                }
            }
        },
        onAction: () => settle(true),
    };
}