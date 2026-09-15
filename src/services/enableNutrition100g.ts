import { getSelector } from "@/data/selectors";
import { waitForElement, sleep } from "@/utils";
import { look } from "@/services/observeReadiness";
import { getSelectorStatus } from "@/stores/selectorsStatus"

async function enableNutrition100g () {
    const selectorNutrition100g = getSelector("Nutrition per 100g button")
    const nutrition100g = await waitForElement(selectorNutrition100g)

    if (nutrition100g instanceof HTMLElement) {
        nutrition100g.click()
    }

    await sleep(500)

    look()

    await sleep(500)
    
    const is100gActive = getSelectorStatus('Nutrition per 100g button active')
    if (!is100gActive) {
        enableNutrition100g()
    }
}

export default enableNutrition100g