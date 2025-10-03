import { LapsEntry } from "@/lib/model/LapsEntry.model";
import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getLapsCollection() {
    const collection = await getCollection<LapsEntry>(SwimCollections.LAPS);
    return collection;
}