import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmers() {
    const col = await getSwimmersCollection();
    return await col.find({}).sort({lastName: 1, firstName: 1}).toArray();
}