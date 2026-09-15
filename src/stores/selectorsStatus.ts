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

export const getSelectorStatus = (selectorName: SelectorName) => {
    const entry = selectorsStatus.value.find(selector => selector.name === selectorName) as SelectorStatus;
    return entry.found
}