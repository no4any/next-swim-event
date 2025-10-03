"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import canChangeTeam from "./canChangeTeam.function";
import { getSwimmersCollection } from "@/lib/mongo/collections";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function teamUpdateAction(userId: string, teamId: string) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen";

    const swimmer = await getSwimmer(userId);
    if (swimmer === null) return "Schwimmer existiert nicht";

    const team = await getTeam(teamId);
    if (team === null) return "Team existiert nicht";

    const canChange = await canChangeTeam(userId);
    if (!canChange) return "Schwimmer kann Team nicht wechseln. Ist wahrscheinlich Teambesitzer oder gemanaged."

    const col = await getSwimmersCollection();
    col.updateOne({ _id: new ObjectId(userId) }, { $set: { teamId } });

    redirect(`/admin/swimmers/details/${userId}`);
}