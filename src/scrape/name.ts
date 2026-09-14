import { type Response } from "@/types/response"
import { getSelector } from "@/data/selectors"
import { cleanText } from "@/utils"

export default function (): Response<string> {
    const selector = getSelector("Recipe Name")
    const recipeNameNode = document.querySelector(selector)

    if (!recipeNameNode) {
        return {
            status: "error",
            data: "Recipe name not found"
        }
    }

    const recipeName = cleanText(recipeNameNode.textContent)
    if (!recipeName) {
        return {
            status: "error",
            data: "Recipe name is empty"
        }
    }

    return {
        status: "success",
        data: recipeName
    }
}