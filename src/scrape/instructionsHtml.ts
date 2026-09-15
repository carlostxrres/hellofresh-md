import { type Response } from "@/types/response"
import { getSelectorString } from "@/data/selectors"

export default function(): Response<string[]> {
  const selector = getSelectorString("Instructions")
  const entryNodes = document.querySelectorAll(selector)
  if (entryNodes.length < 1) {
    return {
      status: "error",
      data: "No instruction steps found"
    }
  }

  return {
    status: "success",
    data: Array.from(entryNodes).map(node => node.innerHTML)
  }
}