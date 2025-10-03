import { ObjectId } from "mongodb";
import { getLapsCollection } from "./getLapsCollection.function";

export async function updateLap(id: string, swimmerId: string, laps: number, registerer: string, deactivated:boolean, nightCup: boolean = false) {
    const col = await getLapsCollection();
    const result = await col.updateOne({ _id: new ObjectId(id) }, {
        $set: {
            createdAt: new Date().getTime(),
            laps,
            swimmerId,
            deactivated,
            registerer,
            nightCup,
        }
    })
    return result;
};