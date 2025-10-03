"use server"

import { auth } from "@/lib/auth/auth";
import { addLap } from "@/lib/mongo/collections/laps/addLap.function";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { redirect } from "next/navigation";

export default async function logAction(id: string, laps: number, night: boolean) {
    const user = await auth();
    if (user === null) redirect('/login');

    const swimmer = await getSwimmer(id);
    if (user === null) redirect(`/admin/log/${night ? "night" : "day"}`);

    return (await addLap(id, laps, user.email, night)).genId;
}