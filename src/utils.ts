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

export const waitForElement = (selector: string): Promise<Element> => {
  const getElement = () => document.querySelector(selector);

  return new Promise((resolve) => {
    const initialElement = getElement();
    if (initialElement) {
      resolve(initialElement);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = getElement();
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
};