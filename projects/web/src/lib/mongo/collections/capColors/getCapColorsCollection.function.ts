import { CapColor } from "../../../model/CapColor.model";
import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getCapColorsCollection() {
    const collection = await getCollection<CapColor>(SwimCollections.CAP_COLORS);
    await collection.createIndex({name: 1}, {unique: true});
    return collection;
}