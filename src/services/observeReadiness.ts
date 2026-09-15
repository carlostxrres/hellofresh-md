import { getSelectorString } from "@/data/selectors"
import { selectorsStatus } from "@/stores/selectorsStatus"
import { status } from "@/stores/status"

const DEBOUNCE_MS = 100

export default function () {
    let timeout: ReturnType<typeof setTimeout>

    const observer = new MutationObserver(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() => look(() => {
            clearTimeout(timeout)
            observer.disconnect()
        }), DEBOUNCE_MS)
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })

    look(() => {
        clearTimeout(timeout)
        observer.disconnect()
    })
}

export function look(exit: () => void = () => { }) {
    let foundSomething = false

    const updated = selectorsStatus.value.map(selectorStatus => {
        if (selectorStatus.found) {
            return selectorStatus
        }

        const selectorString = getSelectorString(selectorStatus.name)
        const didFind = document.querySelector(selectorString)
        if (!didFind) {
            return selectorStatus
        }

        foundSomething = true
        return {
            ...selectorStatus,
            found: true
        }
    })

    if (foundSomething) {
        selectorsStatus.value = updated
    }

    if (updated.every(status => status.found)) {
        exit()
        status.value = {
            state: "ready"
        }
    }
}