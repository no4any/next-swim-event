import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmer(id: string | ObjectId) {
    const col = await getSwimmersCollection();
    return await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}