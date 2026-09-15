import { cleanText } from "@/utils"
import { type Response } from "@/types/response"
import { getSelectorString } from "@/data/selectors"

export default function(): Response<string> {
  const selector = getSelectorString("Description")
  const descriptionNode = document.querySelector(selector)
  if (!descriptionNode) {
    return {
      status: "error",
      data: "Description node not found"
    }
  }

  const description = cleanText(descriptionNode.textContent)
  if (description.length < 1) {
    return {
      status: "error",
      data: "Description is empty"
    }
  }

  return {
    status: "success",
    data: description
  }
}