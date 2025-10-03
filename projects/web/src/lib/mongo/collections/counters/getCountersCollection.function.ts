import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getCountersCollection() {
    const collection = await getCollection<{ name: string, autoIncrementId: number }>(SwimCollections.COUNTERS);
    return collection;
}