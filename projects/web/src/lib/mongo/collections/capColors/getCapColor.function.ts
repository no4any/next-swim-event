import { ObjectId } from "mongodb";
import { getCapColorsCollection } from "./getCapColorsCollection.function";
import { cache } from "react";

export async function getCapColorRaw(id: ObjectId | string) {
    const _id = id instanceof ObjectId ? id : new ObjectId(id);
    const collection = await getCapColorsCollection();
    return collection.findOne({ _id });
}

export const getCapColor = cache(getCapColorRaw);