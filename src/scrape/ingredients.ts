import { cleanText } from "@/utils"
import { type Amount } from "@/types/amount"
import { getSelector } from "@/data/selectors"

function ingredientsEntryNodeToEntry(entryNode: Element): Amount | null {
  const spans = entryNode.querySelectorAll("p")
  const [quantity, name] = Array.from(spans).map(n => cleanText(n.textContent))
  if (!name || !quantity) {
    return null
  }

  return {
    name,
    quantity
  }
}

export default function (): Amount[] {
  const selector1 = getSelector("Shipped Ingredients")
  const selector2 = getSelector("Not Shipped Ingredients")
  const entryNodes1 = document.querySelectorAll(selector1)
  const entryNodes2 = document.querySelectorAll(selector2)
  const entryNodes = [...entryNodes1, ...entryNodes2]

  return Array
    .from(entryNodes)
    .map(ingredientsEntryNodeToEntry)
    .filter((amount): amount is Amount => amount !== null)
}