import { status } from "@/stores/status";
import scrape from "@/scrape";
import css from "./ScrapeButton.css";
import Button from "@/components/ui/Button"
import { useState } from "preact/hooks";
import { hasEntries, hasItems, sleep } from "@/utils"
import Separator from "@/components/ui/Separator"
import compose from "@/services/compose";
import downloadMarkdown from "@/services/download";

GM_addStyle(css);

export default function () {
    const [scrapping, setScrapping] = useState<boolean>(false)
    const [warnings, setWarnings] = useState<string[]>([])
    const addWarning = (warning: string) => setWarnings(prev => [...prev, warning])

    const buttonText = scrapping
        ? "Scraping..."
        : status.value.state === "loading"
            ? "Scrape anyway"
            : "Scrape"

    const onClick = () => {
        if (scrapping) {
            return
        }

        setScrapping(true)

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

        setScrapping(false)
    }

    return (
        <>
            {/* to do: use a custom, shadcn-like <Hr /> */}
            <Separator />

            {warnings.length > 0 &&
                <ul class="scrape-warnings">
                    {warnings.map(warning => <li key={warning}>warning</li>)}
                </ul>
            }

            <Button onClick={onClick}>
                {buttonText}
            </Button>
        </>
    )
}