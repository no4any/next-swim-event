import { ObjectId } from "mongodb";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function getCapColor(id: ObjectId | string) {
    const _id = id instanceof ObjectId ? id : new ObjectId(id);
    const collection = await getCapColorsCollection();
    return collection.findOne({ _id });
}