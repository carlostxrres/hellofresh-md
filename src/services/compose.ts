import type { Scrape } from "@/types/scrape";
import { arrayToMarkdownList } from "@/utils"
import { htmlArrayToOrderedList } from "@/services/htmlToMarkdown"

export default function({
    url,
    name,
    headline,
    nutrition,
    description,
    pdfUrl,
    metrics,
    ingredients,
    utensils,
    instructionsHtml,
    allergens,
}: Scrape) {
    const descriptionString = description.status === "success" ? description.data : `_Description not found: ${description.data}_`
    const pdfUrlString = pdfUrl.status === "success" ? `[PDF](${pdfUrl.data})` : `_PDF URL not found: ${pdfUrl.data}_`
    const fullNameString = [name, headline].filter(s => s.status === "success").map(s => s.data).join(" ")

    const ingredientArray = ingredients.map(i => `${i.name}: ${i.quantity}`)
    const ingredientList = arrayToMarkdownList(ingredientArray)

    const utensilList = arrayToMarkdownList(utensils)
    const utensilListIndented = "\n" + arrayToMarkdownList(utensils, 2)

    const instructionList = instructionsHtml.status === "success"
        ? htmlArrayToOrderedList(instructionsHtml.data)
        : `_Instructions not found: ${instructionsHtml.data}_`

    const allergenList = arrayToMarkdownList(allergens)

    return `---
categories:
  - "[[Recipes]]"
name: ${fullNameString}
type: 
meal: cena
price:
diet:
kcal: ${nutrition.kcal || ""}
protein_g: ${nutrition.protein_g || ""}
carbs_g: ${nutrition.carbs_g || ""}
fat_g: ${nutrition.fat_g || ""}
fiber_g: ${nutrition.fiber_g || ""}
equipment: ${utensilListIndented}
---

${descriptionString}

- [URL](${url})
- ${pdfUrlString}
- Tiempo total: ${metrics.time || ""}
- Difficulty: ${metrics.difficulty || ""}

## Ingredientes

${ingredientList}

## Instrucciones

${instructionList}

## Utensilios

${utensilList}

## Alérgenos

${allergenList}`
}