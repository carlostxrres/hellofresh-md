import { cleanText } from "@/utils"

function ingredientsEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("p")
  const [quantity, name] = Array.from(spans).map(n => cleanText(n.textContent))
  return {
    name,
    quantity
  }
}

export default function() {
  const entryNodes1 = document.querySelectorAll('[data-test-id="ingredient-item-shipped"]')
  const entryNodes2 = document.querySelectorAll('[data-test-id="ingredient-item-not-shipped"]')
  const entryNodes = [...entryNodes1, ...entryNodes2]
  return Array.from(entryNodes).map(ingredientsEntryNodeToEntry)
}