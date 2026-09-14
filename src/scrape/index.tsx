import scrapeNutrition from "@/scrape/nutrition"
import scrapeMetrics from "@/scrape/metrics"
import scrapeDescription from "@/scrape/description"
import scrapeIngredients from "@/scrape/ingredients"
import scrapeInstructionsHtml from "@/scrape/instructionsHtml"
import scrapeAllergens from "@/scrape/allergens"
import scrapeUtensils from "@/scrape/utensils"
import scrapePdfUrl from "@/scrape/pdfUrl"
import { getSelector } from "@/data/selectors"
import { type Scrape } from "@/types/scrape"

export default function(): Scrape {

    // maybe this should be somewhere else
  const selector = getSelector("Nutrition per 100g button")
    const nutrition100gActive = document.querySelector(selector)
    if (!nutrition100gActive) {
        // to do: use a nicer alternative to alert()
        alert("To get the nutrition facts per 100g, please select the button 'Por 100 g'.")
    }

    return {
        url: location.href,
        nutrition: scrapeNutrition(),
        description: scrapeDescription(),
        pdfUrl: scrapePdfUrl(),
        metrics: scrapeMetrics(),
        ingredients: scrapeIngredients(),
        utensils: scrapeUtensils(),
        instructionsHtml: scrapeInstructionsHtml(),
        allergens: scrapeAllergens(),
    }
}