import { CapColor } from "../../../model/CapColor.model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function getCapColors(): Promise<(WithMongoId & CapColor)[]> {
    const collection = await getCapColorsCollection();
    return collection.find().toArray();
}