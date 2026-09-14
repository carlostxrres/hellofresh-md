// Lightweight runtime type checks

export default {
  object: (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && !Array.isArray(value),
  string: (value: unknown): value is string => typeof value === "string",
  null: (value: unknown): value is null => value === null,
  array: (value: unknown): value is any[] => Array.isArray(value),
  arrayOf: <T>(
    value: unknown,
    isOfType: (obj: unknown) => obj is T
  ): value is T[] => Array.isArray(value) && value.every(isOfType),
  undefined: (value: unknown): value is undefined => value === undefined,
  number: (value: unknown): value is number => typeof value === "number",
  boolean: (value: unknown): value is boolean => typeof value === "boolean",
};
