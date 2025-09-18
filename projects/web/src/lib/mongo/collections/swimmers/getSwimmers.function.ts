import "server-only";

import { cache } from "react";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmersRaw() {
    const col = await getSwimmersCollection();
    return await col.find({}).toArray();
}

export const getSwimmers = cache(getSwimmersRaw);