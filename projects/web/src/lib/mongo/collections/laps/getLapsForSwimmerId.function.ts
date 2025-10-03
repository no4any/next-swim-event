import { cache } from "react";
import { getLapsCollection } from "./getLapsCollection.function";
import { ObjectId } from "mongodb";

export async function getLapsForSwimmerIdRaw(id: string | ObjectId) {
    const col = await getLapsCollection();
    const result = await col.find({ swimmerId: id.toString(), deactivated: false }).toArray();
    return result.reduce((acc, curr) => acc + curr.laps, 0);
}

export const getLapsForSwimmerId = cache(getLapsForSwimmerIdRaw)