import { type Response } from "@/types/response"
import { getSelector } from "@/data/selectors"
import { cleanText } from "@/utils"

export default function (): Response<string> {
    const selector = getSelector("Headline")
    const headlineNode = document.querySelector(selector)

    if (!headlineNode) {
        return {
            status: "error",
            data: "Headline not found"
        }
    }

    const headline = cleanText(headlineNode.textContent)
    if (!headline) {
        return {
            status: "error",
            data: "Headline is empty"
        }
    }

    return {
        status: "success",
        data: headline
    }
}