import { status } from "@/stores/status";
import scrape from "@/scrape";
import css from "./ScrapeButton.css";
import Button from "@/components/ui/Button"

GM_addStyle(css);

const onClick = () => {
  const scraped = scrape()
  console.log("Scraped data:", scraped)

  // ONGOING WORK HERE 2026-09-14

  // Show warnings if:
  // - has 0 entries:
  //   - nutrition: Nutrition;
  //   - metrics: Metrics;
  // - has 0 items:
  //   - ingredients: Amount[];
  //   - utensils: string[];
  //   - allergens: string[];
  // - has data.status === "error" (and show its message):
  //   - instructionsHtml: Response<string[]>;
  //   - description: Response<string>;
  //   - pdfUrl: Response<string>;

  // Compose the Markdown file

  // If everything is ok, download the Markdown file

  // If there are errors, show a "download anyway" button
}

export default function () {
    return (
        <Button onClick={onClick}>
            {status.value.state === "loading" ? "Scrape anyway" : "Scrape"}
        </Button>
    )
}