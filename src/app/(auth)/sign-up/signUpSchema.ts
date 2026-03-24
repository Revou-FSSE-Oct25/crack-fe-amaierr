import { z } from "zod"

export const signUpSchema = z.object({
    name: z.string(),

    role: z.enum(["Student", "Instructor"]),

    email: z.email(),

    password: z.
        string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(32, { message: "Password cannot be longer than 32 characters" })
        .refine((password) => /[A-Z]/.test(password), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "Password must contain at least one lowercase letter",
        })
        .refine((password) => /[0-9]/.test(password), {
            message: "Password must contain at least one number",
        })
        .refine((password) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password), {
            message: "Password must contain at least one special character",
        }),
    
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof signUpSchema>