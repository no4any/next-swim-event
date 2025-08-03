import { Swimmer } from "../../../model";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function addSwimmer(swimmer: Swimmer) {
    const col = await getSwimmersCollection();
    return col.insertOne(swimmer);
}