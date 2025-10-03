"use server"

import { auth } from "@/lib/auth/auth";
import { updateLap } from "@/lib/mongo/collections/laps/updateLap.function"
import { redirect } from "next/navigation";

export default async function editLapAction(id: string, swimmerId: string, laps: number, deactivated: boolean, night: boolean) {
    const user = await auth();
    if (user === null) return "Fehlende Berechtigungen";

    await updateLap(id, swimmerId, laps, user.email, deactivated, night);

    redirect(`/admin/laps`);
}