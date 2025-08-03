import { CapColor } from "../../../model/CapColor.model";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function addCap(cap: CapColor) {
    const collection = await getCapColorsCollection();
    return await collection.insertOne(cap);
}