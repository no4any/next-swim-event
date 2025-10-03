import { getLapsCollection } from "./getLapsCollection.function";
import generateId from "../counters/generateId.function";

export async function addLap(id: string, laps: number, registerer: string, nightCup: boolean = false) {
    const col = await getLapsCollection();
    const genId = await generateId('laps');
    const result = await col.insertOne({
        createdAt: new Date().getTime(),
        nr: genId,
        laps,
        swimmerId: id,
        registerer,
        nightCup,
        deactivated: false
    })
    return { ...result, genId };
};