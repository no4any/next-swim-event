import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmer(id: string | ObjectId) {
    try {
        const col = await getSwimmersCollection();
        return await col.findOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
    } catch(e) {
        console.warn(e);
        return null;
    }
}