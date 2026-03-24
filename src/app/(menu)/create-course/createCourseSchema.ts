import { z } from "zod"

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, "Course title must be at least 5 characters"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  category: z.string(),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]),

  price: z
    .number()
    .min(0, "Price cannot be negative")
})

export type CourseFormData = z.infer<typeof courseSchema>