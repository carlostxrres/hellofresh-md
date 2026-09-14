import { cleanText } from "@/utils"

function allergenEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span")
  const utensilNode = spans[0]
  return cleanText(utensilNode.textContent)
}

export default function() {
  const entryNodes = document.querySelectorAll('[data-test-id="recipe-allergens"] ul li')
  return Array.from(entryNodes).map(allergenEntryNodeToEntry)
}