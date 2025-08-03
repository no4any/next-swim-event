import { ObjectId } from "mongodb";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function deleteCapColor(id: ObjectId | string) {
    const _id = id instanceof ObjectId ? id : new Object(id);
    const col = await getCapColorsCollection();
    return col.deleteOne({_id});
}