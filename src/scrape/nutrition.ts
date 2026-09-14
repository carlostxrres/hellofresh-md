import { cleanText } from "@/utils"

const MAP_A = { // to do: rename
  "Valor energético (kJ)": "",
  "Valor energético (kcal)": "kcal",
  "Grasas": "fat_g",
  "de las cuales saturadas": "fat_saturated_g",
  "Carbohidratos": "carbs_g",
  "de los cuales azúcares": "sugar_g",
  "Fibra": "fiber_g",
  "Proteínas": "protein_g",
  "Sodio": "sodium_g",
}

function nutritionEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span")
  const [originalKey, value] = Array.from(spans).map(n => cleanText(n.textContent))
  const correctedKey = MAP_A[originalKey]
  return [correctedKey, value]
}

export default function() {
  const entryNodes = document.querySelectorAll('[data-test-id="nutrition-step"]')
  const entries = Array
    .from(entryNodes)
    .map(nutritionEntryNodeToEntry)
    // Remove entries with no key (because they are not mapped)
    .filter(entry => entry[0])

  return Object.fromEntries(entries)
}