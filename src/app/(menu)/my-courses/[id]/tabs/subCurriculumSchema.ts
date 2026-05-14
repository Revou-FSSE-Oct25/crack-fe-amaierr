import { z } from "zod"

export const subCurriculumnSchema = z.object({
  name: z
    .string()
    .min(5, "Sub curriculum title must be at least 5 characters"),

  materialLink: z
  .url({ message: "Please enter a valid URL" }),
  
  duration: z
    .number()
    .min(1, "Duration minimal is 1 minute"),

})

export type SubCurriculumnFormData = z.infer<typeof subCurriculumnSchema>