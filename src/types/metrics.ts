export type MetricsKey =
    | "calories"
    | "protein"
    | "time"
    | "difficulty"

export type Metrics = Partial<Record<MetricsKey, string>>