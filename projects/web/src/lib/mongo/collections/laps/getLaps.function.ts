import { cache } from "react";
import { getLapsCollection } from "./getLapsCollection.function";

export async function getLapsRaw() {
    const col = await getLapsCollection();
    const result = await col.find({}).sort({nr: 1}).toArray();
    return result;
}

export const getLaps = cache(getLapsRaw);