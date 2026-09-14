export type NutritionKey =
    | "kcal"
    | "fat_g"
    | "fat_saturated_g"
    | "carbs_g"
    | "sugar_g"
    | "fiber_g"
    | "protein_g"
    | "sodium_g"

export type Nutrition = Partial<Record<NutritionKey, string>>