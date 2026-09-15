import { type Response } from "@/types/response"
import { getSelectorString } from "@/data/selectors"

export default function (): Response<string> {

  const selector = getSelectorString("Recipe PDF")
    const pdfUrl = document.querySelector(selector)

    if (!pdfUrl) {
        return {
            status: "error",
            data: "PDF URL not found"
        }
    }

    const url = pdfUrl.getAttribute("href")
    if (!url) {
        return {
            status: "error",
            data: "PDF URL is empty"
        }
    }

    return {
        status: "success",
        data: url
    }
}