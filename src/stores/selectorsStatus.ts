import { signal } from '@preact/signals';
import type { SelectorName } from "@/types/selectors"
import { selectors } from "@/data/selectors"

type SelectorStatus = {
    name: SelectorName;
    found: boolean
}

const initialStatus = selectors.map(selector => ({
    name: selector.name,
    found: false,
}))

export const selectorsStatus = signal<SelectorStatus[]>(initialStatus);