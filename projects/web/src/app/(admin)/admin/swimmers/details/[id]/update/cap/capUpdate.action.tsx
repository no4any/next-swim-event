"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmersCollection } from "@/lib/mongo/collections";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getSwimmerByCap } from "@/lib/mongo/collections/swimmers/getSwimmerByCap";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function capUpdateAction(swimmerId: string, capColorId: string, capNr: number) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen"

    const swimmer = await getSwimmer(swimmerId);
    if(swimmer?.capColor === capColorId && swimmer.capNr === capNr) redirect(`/admin/swimmers/details/${swimmerId}`);

    const byCap = await getSwimmerByCap(capColorId, capNr);

    if(byCap !== null) return "Kappe bereits vergeben";

    const col = await getSwimmersCollection();

    await col.updateOne({_id: new ObjectId(swimmerId), isRegistered: true}, {$set: {
        capColor: capColorId,
        capNr
    }})

    redirect(`/admin/swimmers/details/${swimmerId}`);
}