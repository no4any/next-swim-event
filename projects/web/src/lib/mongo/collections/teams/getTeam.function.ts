import "server-only";

import { ObjectId } from "mongodb";
import { getTeamsCollection } from "./getTeamsCollection.function";
import { cache } from "react";

export async function getTeamRaw(id: string | ObjectId) {
    const col = await getTeamsCollection();
    return await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}

export const getTeam = cache(getTeamRaw);