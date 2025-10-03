import { ObjectId } from "mongodb";
import { getLapsCollection } from "./getLapsCollection.function";
import { cache } from "react";

export async function getLapRaw(id: string | ObjectId) {
    const col = await getLapsCollection();
    const result = await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
    return result;
}

export const getLap = cache(getLapRaw);