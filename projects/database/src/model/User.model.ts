import z from "zod/v4";
import { Roll } from "./Roll.model";

export const User = z.object({
    mail: z.email(),
    password: z.string().nullish(),
    roll: Roll
})

export type User = z.infer<typeof User>