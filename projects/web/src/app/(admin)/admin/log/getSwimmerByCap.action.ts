"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmerByCap } from "@/lib/mongo/collections/swimmers/getSwimmerByCap";
import { redirect } from "next/navigation";

export default async function getSwimmerByCapAction(capId: string, capNr: number, night: boolean) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen";

    const swimmer = await getSwimmerByCap(capId, capNr);
    if (swimmer === null) return "Kein Schwimmer mit dieser Badekappe vorhanden";

    redirect(`/admin/log/${night ? "night" : "day"}/${swimmer._id.toString()}`);
}