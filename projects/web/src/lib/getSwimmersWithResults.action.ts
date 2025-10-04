"use server"

import getAge from "./getAge";
import { Swimmer } from "./model";
import { getSwimmersCollection } from "./mongo/collections";
import { getLapsForSwimmerId } from "./mongo/collections/laps/getLapsForSwimmerId.function";
import { getNightLapsForSwimmerIdRaw } from "./mongo/collections/laps/getNightLapsForSwimmerId.function";
import { getSwimmers } from "./mongo/collections/swimmers/getSwimmers.function";

export default async function getSwimmerWithResultsAction(): Promise<(Swimmer & {
    total: number,
    night: number,
    age: number
})[]> {
    const swimmers = (await getSwimmers()).filter(swimmer => swimmer.isRegistered);

    const col = await getSwimmersCollection();

    const result = await Promise.all(swimmers.map(async (swimmer) => ({
        ...swimmer,
        age: swimmer.birthday ? getAge(new Date(swimmer.birthday)) : 0,
        total: await getLapsForSwimmerId(swimmer._id?.toString() || ""),
        night: await getNightLapsForSwimmerIdRaw(swimmer._id?.toString() || "")
    })))

    return await result;
}