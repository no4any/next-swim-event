import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmersInTeam(id: string | ObjectId) {
    const col = await getSwimmersCollection();
    return await col.find({ teamId: id instanceof ObjectId ? id.toString() : id }).toArray();
}