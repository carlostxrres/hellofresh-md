import scrapeNutrition from "@/scrape/nutrition"
import scrapeMetrics from "@/scrape/metrics"
import scrapeDescription from "@/scrape/description"
import scrapeIngredients from "@/scrape/ingredients"
import scrapeInstructionsHtml from "@/scrape/instructionsHtml"
import scrapeAllergens from "@/scrape/allergens"
import scrapeUtensils from "@/scrape/utensils"
import scrapePdfUrl from "@/scrape/pdfUrl"
import scrapeName from "@/scrape/name"
import scrapeHeadline from "@/scrape/headline"
import { type Scrape } from "@/types/scrape"

export default function (): Scrape {
    return {
        url: location.href,
        name: scrapeName(),
        headline: scrapeHeadline(),
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