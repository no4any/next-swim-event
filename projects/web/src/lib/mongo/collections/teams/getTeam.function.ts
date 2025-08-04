import { ObjectId } from "mongodb";
import { getTeamsCollection } from "./getTeamsCollection.function";

export default async function getTeam(id: string | ObjectId) {
    const col = await getTeamsCollection();
    return await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}