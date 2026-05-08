import { z } from "zod"

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, "Course title must be at least 5 characters"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  categoryId: z
    .string()
    .nonempty("Select one of the categories"),

  level: z.enum(["Beginner", "Intermediate", "Advanced"], "Select on of the levels")
})

export type CourseFormData = z.infer<typeof courseSchema>