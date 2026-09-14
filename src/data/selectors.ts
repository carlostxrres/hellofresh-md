import type { SelectorName } from "@/types/selectors"

type SelectorEntry = {
    name: SelectorName;
    string: string
}

// Here should be all "document.query..." calls that will be used to scrape the data.
export const selectors: SelectorEntry[] = [
    {
        name: 'Recipe Name',
        string: '[data-test-id="recipe-name"]',
    },
    {
        name: 'Headline',
        string: '[data-test-id="recipe-headline"]',
    },
    {
        name: 'Allergens',
        string: '[data-test-id="recipe-allergens"] ul li',
    },
    {
        name: 'Description',
        string: '[data-test-id="recipe-description-text"]',
    },
    {
        name: 'Nutrition per 100g button',
        string: '[aria-pressed="true"] [data-translation-id="recipe-detail.recipe-detail.per-100g"]',
    },
    {
        name: 'Shipped Ingredients',
        string: '[data-test-id="ingredient-item-shipped"]',
    },
    {
        name: 'Not Shipped Ingredients',
        string: '[data-test-id="ingredient-item-not-shipped"]',
    },
    {
        name: 'Instructions',
        string: '[data-test-id="instruction-step"]',
    },
    {
        name: 'Recipe Metrics',
        string: '[data-test-id="recipe-metrics"] > div',
    },
    {
        name: 'Nutrition Step',
        string: '[data-test-id="nutrition-step"]',
    },
    {
        name: 'Recipe PDF',
        string: '[data-test-id="recipe-pdf"]',
    },
    {
        name: 'Utensils List Item',
        string: '[data-test-id="utensils-list-item"]',
    }
]

export function getSelector(selectorName: SelectorName) {
    const entry = selectors.find(selector => selector.name === selectorName) as SelectorEntry;
    return entry.string
}