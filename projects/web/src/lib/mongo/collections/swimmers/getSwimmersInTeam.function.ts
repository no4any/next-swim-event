import "server-only";

import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";
import { cache } from "react";

export async function getSwimmersInTeamRaw(id: string | ObjectId) {
    const col = await getSwimmersCollection();
    return await col.find({ teamId: id instanceof ObjectId ? id.toString() : id }).toArray();
}

export const getSwimmersInTeam = cache(getSwimmersInTeamRaw);