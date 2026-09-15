export function cleanText(string: string | null): string {
  return (string ?? "").trim()
}

export function arrayToMarkdownList(array: string[], indent: number = 0): string {
  // to do: maybe use a dependency for this
  return array
    .map(item => {
      const indentString = Array(indent).fill(" ").join("")
      return `${indentString}- ${item}`
    })
    .join("\n")
}

export function hasItems(array: any[]) {
  return array.length > 0
}

export function hasEntries(record: Record<any, any>) {
  const keys = Object.keys(record)
  return hasItems(keys)
}

export const sleep = async (delay = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};