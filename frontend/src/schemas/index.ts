import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please provide a valid email"}),
    password: z.string({ message: "Please provide a valid password"})
                .min(4, { message: "Password should more than 4 character"})
                .max(60, { message: "Password should less than 20 character"})
})

export const RegisterSchema = z.object({
    username: z.string().min(3, { message: "Username should be at least 3 characters"}),
    email: z.string().email({ message: "Please provide a valid email"}),
    password: z.string({ message: "Please provide a valid password"})
                .min(4, { message: "Password should more than 4 character"})
                .max(20, { message: "Password should less than 20 character"})
})