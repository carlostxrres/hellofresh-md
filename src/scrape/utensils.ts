import { cleanText } from "@/utils"

function utensilEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span")
  const utensilNode = spans[1]
  return cleanText(utensilNode.textContent)
}

export default function() {
  const entryNodes = document.querySelectorAll('[data-test-id="utensils-list-item"]')
  return Array.from(entryNodes).map(utensilEntryNodeToEntry)
}