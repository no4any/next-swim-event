import z from "zod/v4";
import { ObjectId } from "mongodb";

export const LapsEntry = z.object({
    _id: z.union([z.instanceof(ObjectId), z.string()]).optional(),
    swimmerId: z.string(),
    nr: z.number(),
    deactivated: z.boolean().optional(),
    createdAt: z.number(),
    laps: z.number().min(1),
    registerer: z.string(),
    nightCup: z.boolean().optional(),
})

export type LapsEntry = z.infer<typeof LapsEntry>