import "server-only";

import { ObjectId } from "mongodb";
import { Swimmer } from "../../../model";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export async function updateSwimmer(swimmer: Swimmer) {
    const { _id, ...rest } = swimmer;
    const col = await getSwimmersCollection();
    return col.updateOne({
        _id: _id instanceof ObjectId ? _id : new ObjectId(_id)
    }, {
        $set: {
            ...rest
        }
    });
}