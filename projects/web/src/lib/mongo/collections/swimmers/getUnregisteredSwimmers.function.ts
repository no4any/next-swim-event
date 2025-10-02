import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getUnregisteredSwimmers() {
    const col = await getSwimmersCollection();
    return await col.find({isRegistered: false}).sort({lastName: 1, firstName: 1}).toArray();
}