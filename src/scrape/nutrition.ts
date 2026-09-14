import { cleanText } from "@/utils"
import type { NutritionKey, Nutrition } from "@/types/nutrition"
import { getSelector } from "@/data/selectors"

type NutritionEntry = [NutritionKey, string]

const NUTRITION_MAP: Record<string, NutritionKey> = {
  // "Valor energético (kJ)": "",
  "Valor energético (kcal)": "kcal",
  "Grasas": "fat_g",
  "de las cuales saturadas": "fat_saturated_g",
  "Carbohidratos": "carbs_g",
  "de los cuales azúcares": "sugar_g",
  "Fibra": "fiber_g",
  "Proteínas": "protein_g",
  "Sodio": "sodium_g",
}

function nutritionEntryNodeToEntry(entryNode: Element): NutritionEntry | null {
  const spans = entryNode.querySelectorAll("span")
  const [originalKey, value] = Array.from(spans).map(n => cleanText(n.textContent))
  if (!originalKey || !value) {
    return null
  }

  const correctedKey: NutritionKey | undefined = NUTRITION_MAP[originalKey]
  if (!correctedKey) {
    return null
  }

  return [correctedKey, value]
}

export default function (): Nutrition {
  const selector = getSelector("Nutrition Step")
  const entryNodes = document.querySelectorAll(selector)
  const entries = Array
    .from(entryNodes)
    .map(nutritionEntryNodeToEntry)
    // Remove entries with no key (because they are not mapped)
    .filter((entry): entry is NutritionEntry => entry !== null)

  return Object.fromEntries(entries)
}