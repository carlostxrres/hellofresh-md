// Thin, typed wrapper around Tampermonkey's GM value storage.
// Ready to grow with the features you need.

export function getValue<T>(key: string, fallback: T): Promise<T> {
  return GM.getValue(key, fallback);
}

export function setValue<T>(key: string, value: T): Promise<void> {
  return GM.setValue(key, value);
}

export function deleteValue(key: string): Promise<void> {
  return GM.deleteValue(key);
}
