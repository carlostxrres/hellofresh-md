import { status } from "@/stores/status";
import scrape from "@/scrape";
import css from "./ScrapeButton.css";
import Button from "@/components/ui/Button"
import { useState } from "preact/hooks";
import { hasEntries, hasItems, sleep } from "@/utils"
import compose from "@/services/compose";
import downloadMarkdown from "@/services/download";
import { FileDown, Loader, Check } from 'lucide-preact';
import warnForNutrition100g from "@/services/warnForNutrition100g";

GM_addStyle(css);

type ScrapeState =
    | "idle"
    | "scrapping"
    | "just-scrapped"

export default function () {
    const [scrapeState, setScrapeState] = useState<ScrapeState>("idle")
    const [warnings, setWarnings] = useState<string[]>([])
    const addWarning = (warning: string) => setWarnings(prev => [...prev, warning])

    const onClick = () => {
        if (scrapeState !== "idle") {
            return
        }

        setScrapeState("scrapping")

        warnForNutrition100g()
        
        const scraped = scrape()

        if (!hasEntries(scraped.nutrition)) {
            addWarning("No nutrition entries found")
        }

        if (!hasEntries(scraped.metrics)) {
            addWarning("No metric entries found")
        }

        if (!hasItems(scraped.ingredients)) {
            addWarning("No ingredients found")
        }

        if (!hasItems(scraped.utensils)) {
            addWarning("No utensils found")
        }

        if (!hasItems(scraped.allergens)) {
            addWarning("No allergens found")
        }

        if (scraped.name.status === "error") {
            addWarning(`No recipe instructions available: ${scraped.name.data}`)
        }

        if (scraped.headline.status === "error") {
            addWarning(`No recipe instructions available: ${scraped.headline.data}`)
        }

        if (scraped.instructionsHtml.status === "error") {
            addWarning(`No recipe instructions available: ${scraped.instructionsHtml.data}`)
        }

        if (scraped.description.status === "error") {
            addWarning(`No recipe description available: ${scraped.description.data}`)
        }

        if (scraped.pdfUrl.status === "error") {
            addWarning(`No PDF URL available: ${scraped.pdfUrl.data}`)
        }

        // Compose the Markdown file
        const markdown = compose(scraped)
        console.log("Scraped data:", markdown)

        // Download the Markdown file, named after the recipe
        const filename = scraped.name.status === "success" ? scraped.name.data : "recipe"
        downloadMarkdown(filename, markdown)

        setScrapeState("just-scrapped")
        sleep(3000).then(() => setScrapeState("idle"))
    }

    return (
        <>
            {warnings.length > 0 &&
                <ul class="scrape-warnings">
                    {warnings.map(warning => <li key={warning}>warning</li>)}
                </ul>
            }

            <Button onClick={onClick}>
                {scrapeState === "idle" && status.value.state === "loading" && (
                    <>
                        <FileDown />
                        Scrape anyway
                    </>
                )}

                {scrapeState === "idle" && status.value.state !== "loading" && (
                    <>
                        <FileDown />
                        Scrape
                    </>
                )}

                {scrapeState === "scrapping" && (
                    <>
                        <Loader />
                        Scrapping...
                    </>
                )}

                {scrapeState === "just-scrapped" && (
                    <>
                        <Check />
                        Scrapped!
                    </>
                )}
            </Button>
        </>
    )
}