import { cleanText } from "@/utils"

export default function() {
  const descriptionNode = document.querySelector('[data-test-id="recipe-description-text"]')
  return cleanText(descriptionNode.textContent)
}