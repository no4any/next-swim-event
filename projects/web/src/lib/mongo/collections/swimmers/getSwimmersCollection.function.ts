import { Swimmer } from "../../../model";
import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getSwimmersCollection() {
    const collection = await getCollection<Swimmer>(SwimCollections.SWIMMERS);
    await collection.createIndex({ email: 1 }, { unique: true });
    return collection;
}