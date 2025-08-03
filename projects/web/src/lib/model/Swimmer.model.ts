import z from "zod/v4";
import { ObjectId } from "mongodb";

export const Swimmer = z.object({
    _id: z.union([z.instanceof(ObjectId), z.string()]).optional(),
    email: z.email().optional(),
    managerId: z.string().min(2).optional(),
    isRegistered: z.boolean(),
    isClosed: z.boolean(),
    isManaged: z.boolean(),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    gender: z.enum(["0", "M", "W"]),
    city: z.string().optional(),
    distanceRating: z.boolean(),
    birthday: z.iso.date().optional(),
    teamId: z.string().min(2).optional(),
    breakfast: z.boolean(),
    allowsPublishingName: z.boolean(),
    capColor: z.string().min(2).optional(),
    capNr: z.int().min(1).max(100).optional(),
    regNr: z.int().min(1).max(999).optional(),
    newsletter: z.boolean().optional(),
})

export type Swimmer = z.infer<typeof Swimmer>