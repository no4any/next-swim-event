"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmersCollection } from "@/lib/mongo/collections";
import { getSwimmerByCap } from "@/lib/mongo/collections/swimmers/getSwimmerByCap";
import { getSwimmerByRegNr } from "@/lib/mongo/collections/swimmers/getSwimmerByRegNr.function"
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function registerSwimmerAction(swimmerId: string, capColorId: string, capNr: number, regNr: number) {
    const user = await auth();

    if(user === null) return "Fehlende berechtigungen";

    const byRegNr = await getSwimmerByRegNr(regNr);
    console.log(byRegNr);
    if(byRegNr !== null) return "Registriernummer bereits vergeben!";

    const byCap = await getSwimmerByCap(capColorId, capNr);
    if(byCap !== null) return "Kappe bereits vergeben";

    const col = await getSwimmersCollection();

    await col.updateOne({_id: new ObjectId(swimmerId), isRegistered: false}, {$set : {
        capColor: capColorId,
        capNr,
        regNr,
        isRegistered: true
    }});

    redirect(`/admin/swimmers/details/${swimmerId}`);
}