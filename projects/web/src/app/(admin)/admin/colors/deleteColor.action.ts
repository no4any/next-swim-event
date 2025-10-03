"use server"

import { auth } from "@/lib/auth/auth";
import { getCapColorsCollection, getSwimmersCollection } from "@/lib/mongo/collections";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function deleteColorAction(id: string) {
    const user = await auth();

    if (user === null) return "Fehlende Berechtigungen";

    const swimmersCol = await getSwimmersCollection();

    const swimmersWithColor = await swimmersCol.find({ capColor: id }).toArray();

    if (swimmersWithColor.length > 0) return "Farbe in verwendung. Löschen nicht möglich."

    const capColor = await getCapColorsCollection();

    await capColor.deleteOne({_id: new ObjectId(id)});

    redirect("/admin/colors");
}