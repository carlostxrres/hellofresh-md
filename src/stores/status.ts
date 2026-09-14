import { signal } from '@preact/signals';

type Status = {
    state: "loading" | "ready" | "error";
    message?: string;
}

export const status = signal<Status>({ state: "loading", message: "Idle" });