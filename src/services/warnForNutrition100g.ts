
import { getSelector } from "@/data/selectors"

export default function() {
    const selector = getSelector("Nutrition per 100g button")
    const nutrition100gActive = document.querySelector(selector)
    if (!nutrition100gActive) {
        // to do: use a nicer alternative to alert()
        alert("To get the nutrition facts per 100g, please select the button 'Por 100 g'.")
    }
}