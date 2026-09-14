import TurndownService from "turndown"

const turndown = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "_",
})

// Step images and the standalone step-number badge are dropped: the Markdown list supplies the numbering
turndown.addRule("dropImages", {
    filter: "img",
    replacement: () => "",
})

turndown.addRule("stepNumber", {
    filter: node => node.nodeName === "SPAN" && /^\s*\d+\s*$/.test(node.textContent ?? ""),
    replacement: () => "",
})

export function htmlToMarkdown(html: string): string {
    return turndown
        .turndown(html)
        .replace(/ /g, " ")
        .trim()
}

// Renders each HTML fragment as a single-line item of an ordered list.
// Paragraph breaks inside a step are collapsed into spaces so every step stays on one line.
export function htmlArrayToOrderedList(htmlArray: string[]): string {
    return htmlArray
        .map((html, index) => {
            const text = htmlToMarkdown(html).replace(/\s*\n\s*/g, " ")
            return `${index + 1}. ${text}`
        })
        .join("\n")
}
