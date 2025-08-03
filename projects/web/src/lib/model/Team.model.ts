import { ObjectId } from "mongodb";
import z from "zod/v4";

export const Team = z.object({
    _id: z.union([z.instanceof(ObjectId), z.string()]).optional(),
    name: z.string().min(2),
    lowerName: z.string().min(2),
    owner: z.string()
})

export type Team = z.infer<typeof Team>