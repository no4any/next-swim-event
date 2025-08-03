import z from "zod/v4";
import { ObjectId } from "mongodb";

export const WithMongoId = z.object({
    _id: z.union([z.instanceof(ObjectId), z.string()])
})

export type WithMongoId = z.infer<typeof WithMongoId>