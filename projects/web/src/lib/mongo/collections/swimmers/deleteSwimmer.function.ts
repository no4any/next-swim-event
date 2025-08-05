import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";
import { getSwimmer } from "./getSwimmer.function";

export async function deleteSwimmer(id: string | ObjectId) {
    const swimmer = await getSwimmer(id);

    if(swimmer === null) {
        return null;
    }

    if(swimmer.isRegistered) {
        return null;
    }

    const col = await getSwimmersCollection();
    return col.deleteOne({ _id: id instanceof ObjectId ? id : new ObjectId(id) });
}