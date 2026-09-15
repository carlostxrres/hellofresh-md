import { cleanText } from "@/utils"
import { getSelectorString } from "@/data/selectors"

function allergenEntryNodeToEntry(entryNode: Element): string | null {
  const spans = entryNode.querySelectorAll("span")
  if (spans.length < 1) {
    return null
  }

  const utensilNode = spans[0]

  const allergen = cleanText(utensilNode.textContent)
  if (allergen.length < 1) {
    return null
  }

  return allergen
}

export default function () {
  const selector = getSelectorString("Allergens")
  const entryNodes = document.querySelectorAll(selector)
  return Array
    .from(entryNodes)
    .map(allergenEntryNodeToEntry)
    .filter((entry): entry is string => entry !== null)
}