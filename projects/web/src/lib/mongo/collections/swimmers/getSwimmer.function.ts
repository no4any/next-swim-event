import "server-only";

import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";
import { cache } from "react";

export async function getSwimmerRaw(id: string | ObjectId) {
    const col = await getSwimmersCollection();
    return await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}

export const getSwimmer = cache(getSwimmerRaw);