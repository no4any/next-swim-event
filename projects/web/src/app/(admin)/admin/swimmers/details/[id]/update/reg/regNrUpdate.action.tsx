"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmersCollection } from "@/lib/mongo/collections";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getSwimmerByCap } from "@/lib/mongo/collections/swimmers/getSwimmerByCap";
import { getSwimmerByRegNr } from "@/lib/mongo/collections/swimmers/getSwimmerByRegNr.function";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function regNrUpdateAction(swimmerId: string, regNr: number) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen"

    const swimmer = await getSwimmer(swimmerId);
    if(swimmer?.regNr === regNr) redirect(`/admin/swimmers/details/${swimmerId}`);

    const byCap = await getSwimmerByRegNr(regNr);

    if(byCap !== null) return "Registrienummer bereis vergeben!";

    const col = await getSwimmersCollection();

    await col.updateOne({_id: new ObjectId(swimmerId), isRegistered: true}, {$set: {
        regNr
    }})

    redirect(`/admin/swimmers/details/${swimmerId}`);
}