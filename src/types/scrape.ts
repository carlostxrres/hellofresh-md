import type { Response } from "@/types/response";
import type { Amount } from "@/types/amount";
import type { Nutrition } from "@/types/nutrition";
import type { Metrics } from "@/types/metrics";

export type Scrape = {
    url: string;

    nutrition: Nutrition;
    metrics: Metrics;

    ingredients: Amount[];
    utensils: string[];
    allergens: string[];

    name: Response<string>;
    headline: Response<string>;
    instructionsHtml: Response<string[]>;
    description: Response<string>;
    pdfUrl: Response<string>;
}