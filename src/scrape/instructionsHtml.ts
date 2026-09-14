import { type Response } from "@/types/response"
import { getSelector } from "@/data/selectors"

export default function(): Response<string[]> {
  const selector = getSelector("Instructions")
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