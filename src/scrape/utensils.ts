import { cleanText } from "@/utils"
import { getSelector } from "@/data/selectors"

function utensilEntryNodeToEntry(entryNode: Element): string | null {
  const spans = entryNode.querySelectorAll("span")
  if (spans.length < 2) {
    return null
  }

  const utensilNode = spans[1]
  return cleanText(utensilNode.textContent)
}

export default function () {
  const selector = getSelector("Utensils List Item")
  const entryNodes = document.querySelectorAll(selector)
  return Array
    .from(entryNodes)
    .map(utensilEntryNodeToEntry)
    .filter((entry): entry is string => !!entry)
}