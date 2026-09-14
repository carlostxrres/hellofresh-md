import { cleanText } from "@/utils"

const MAP_B = {
  "Calorías": "calories",
  "Proteínas": "protein",
  "Tiempo total": "time",
  "Difficulty": "difficulty",
}

function metricsEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span")
  const [originalKey, blank, value] = Array.from(spans).map(n => cleanText(n.textContent))
  const correctedKey = MAP_B[originalKey]
  return [correctedKey, value]
}

export default function() {
  const entryNodes = document.querySelectorAll('[data-test-id="recipe-metrics"] > div')
  const entries = Array
    .from(entryNodes)
    .map(metricsEntryNodeToEntry)
    // Remove entries with no key (because they are not mapped)
    .filter(entry => entry[0])

  return Object.fromEntries(entries)
}