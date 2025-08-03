import z from "zod/v4";
import { Roll } from "./Roll.model";

export const User = z.object({
    email: z.email(),
    roll: Roll
})

export const UserWithPassword = z.object({
    ...User.shape,
    password: z.string()
})

export type User = z.infer<typeof User>
export type UserWithPassword = z.infer<typeof UserWithPassword>