import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmerByRegNr(regNr: number) {
    const col = await getSwimmersCollection();
    return await col.findOne({ regNr });
}