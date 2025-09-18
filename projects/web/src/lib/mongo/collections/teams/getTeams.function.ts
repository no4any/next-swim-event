import "server-only";

import { cache } from "react";
import { getTeamsCollection } from "./getTeamsCollection.function";

export async function getTeamsRaw() {
    const col = await getTeamsCollection();
    return await col.find({}).toArray();
}

export const getTeams = cache(getTeamsRaw)