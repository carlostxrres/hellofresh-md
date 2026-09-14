export default function() {
  const entryNodes = document.querySelectorAll('[data-test-id="instruction-step"]')
  return Array.from(entryNodes).map(node => node.innerHTML)
}