import { z } from "zod"

export const settingsSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .email("Invalid email address")
})

export type SettingsFormData = z.infer<typeof settingsSchema>