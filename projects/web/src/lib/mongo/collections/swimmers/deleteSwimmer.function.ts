import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function deleteSwimmer(id: string | ObjectId) {
    const col = await getSwimmersCollection();
    return col.deleteOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}