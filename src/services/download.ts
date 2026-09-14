import { saveAs } from "file-saver"

const MARKDOWN_MIME_TYPE = "text/markdown;charset=utf-8"

// Characters that are invalid in filenames on Windows/macOS/Linux, plus control characters
const INVALID_FILENAME_CHARS = /[<>:"/\\|?*\p{Cc}]/gu
const TRAILING_DOTS_AND_SPACES = /[. ]+$/

function sanitizeFilename(name: string): string {
    return name
        .replace(INVALID_FILENAME_CHARS, "")
        .replace(TRAILING_DOTS_AND_SPACES, "")
        .trim()
}

export default function downloadMarkdown(name: string, markdown: string) {
    const filename = `${sanitizeFilename(name) || "recipe"}.md`
    const blob = new Blob([markdown], { type: MARKDOWN_MIME_TYPE })
    saveAs(blob, filename)
}
