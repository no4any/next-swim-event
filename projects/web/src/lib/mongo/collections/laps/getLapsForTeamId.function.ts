import { cache } from "react";
import { getLapsCollection } from "./getLapsCollection.function";
import { ObjectId } from "mongodb";
import { getSwimmersInTeam } from "../swimmers/getSwimmersInTeam.function";

export async function getLapsForTeamIdRaw(id: string | ObjectId) {
    const swimmers = await getSwimmersInTeam(id);
    const swimmerIds = swimmers.map(s => s._id.toString());

    const col = await getLapsCollection();
    const result = await col.find({ swimmerId: { $in: swimmerIds }, deactivated: false }).toArray();
    return result.reduce((acc, curr) => acc + curr.laps, 0);
}

export const getLapsForTeamId = cache(getLapsForTeamIdRaw);