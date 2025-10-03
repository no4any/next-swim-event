"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmerByRegNr } from "@/lib/mongo/collections/swimmers/getSwimmerByRegNr.function";
import { redirect } from "next/navigation";

export default async function getSwimmerByRegNrAction(regNr: number, night: boolean) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen";

    const swimmer = await getSwimmerByRegNr(regNr);
    if (swimmer === null) return "Kein Schwimmer mit dieser Nummer vorhanden";

    redirect(`/admin/log/${night ? "night" : "day"}/${swimmer._id.toString()}`);
}