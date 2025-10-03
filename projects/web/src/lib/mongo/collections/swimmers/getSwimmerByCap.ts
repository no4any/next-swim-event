import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function getSwimmerByCap(capColor:string, capNr: number) {
    const col = await getSwimmersCollection();
    return await col.findOne({ capColor, capNr });
}