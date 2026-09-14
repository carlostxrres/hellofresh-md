import { cleanText } from "@/utils"
import type { MetricsKey, Metrics } from "@/types/metrics"
import { getSelector } from "@/data/selectors"

type MetricsEntry = [MetricsKey, string]

const METRICS_MAP: Record<string, MetricsKey> = {
  "Calorías": "calories",
  "Proteínas": "protein",
  "Tiempo total": "time",
  "Difficulty": "difficulty",
}

function metricsEntryNodeToEntry(entryNode: Element): MetricsEntry | null {
  const spans = entryNode.querySelectorAll("span")
  const [originalKey, blank, value] = Array.from(spans).map(n => cleanText(n.textContent))
  if (!originalKey || !value) {
    return null
  }

  const correctedKey = METRICS_MAP[originalKey]
  if (!correctedKey) {
    return null
  }

  return [correctedKey, value]
}

export default function (): Metrics {
  const selector = getSelector("Recipe Metrics")
  const entryNodes = document.querySelectorAll(selector)
  const entries = Array
    .from(entryNodes)
    .map(metricsEntryNodeToEntry)
    // Remove entries with no key (because they are not mapped)
    .filter(entry => entry !== null)

  return Object.fromEntries(entries)
}