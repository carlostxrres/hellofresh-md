import { getSelectorString } from "@/data/selectors";
import { waitForElement, sleep } from "@/utils";
import { look } from "@/services/observeReadiness";
import { getSelectorStatus } from "@/stores/selectorsStatus"

const MAX_REPETITIONS = 10

async function enableNutrition100g (left = MAX_REPETITIONS) {
    console.log("left", left)
    const selectorNutrition100g = getSelectorString("Nutrition per 100g button")
    const nutrition100g = await waitForElement(selectorNutrition100g)

    if (nutrition100g instanceof HTMLElement) {
        nutrition100g.click()
    }

    await sleep(500)

    look()

    await sleep(500)
    
    const is100gActive = getSelectorStatus('Nutrition per 100g button active')
    if (!is100gActive && left > 0) {
        enableNutrition100g(left - 1)
    }
}

export default enableNutrition100g