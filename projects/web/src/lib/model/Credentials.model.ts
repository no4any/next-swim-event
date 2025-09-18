import z from "zod/v4";

export const Credentials = z.object({
    username: z.string().min(1),
    password: z.string().min(8)
})

export type Credentials = z.infer<typeof Credentials>