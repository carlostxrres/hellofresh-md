import { status } from "@/stores/status";
import scrape from "@/scrape";
import css from "./ScrapeButton.css";
import Button from "@/components/ui/Button"
import { useState } from "preact/hooks";
import { hasEntries, hasItems, sleep } from "@/utils"
import compose from "@/services/compose";
import downloadMarkdown from "@/services/download";
import { FileDown, Loader, Check } from 'lucide-preact';
import { getSelectorString } from "@/data/selectors"
import { useConfirm } from "@/hooks/useConfirm";
import NutritionWarningDialog from "./NutritionWarningDialog";

GM_addStyle(css);

type ScrapeState =
    | "idle"
    | "scrapping"
    | "just-scrapped"

export default function () {
    const [scrapeState, setScrapeState] = useState<ScrapeState>("idle")
    const [warnings, setWarnings] = useState<string[]>([])
    const addWarning = (warning: string) => setWarnings(prev => [...prev, warning])

    const nutritionWarning = useConfirm();

    const onClick = async () => {
        if (scrapeState !== "idle") {
            return
        }

        const selector = getSelectorString("Nutrition per 100g button")
        const isNutrition100gActive = document.querySelector(selector)
        if (!isNutrition100gActive) {
            const proceed = await nutritionWarning.confirm();
            if (!proceed) {
                return;
            }
        }

        setScrapeState("scrapping")

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

            <NutritionWarningDialog {...nutritionWarning} />

            <Button onClick={onClick}>
                {scrapeState === "idle" && (
                    <>
                        <FileDown />
                        {status.value.state === "ready" ? "Scrape" : "Scrape anyway"}
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
