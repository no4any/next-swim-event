"use server"

import { auth } from "@/lib/auth/auth";
import { CapColor } from "@/lib/model/CapColor.model";
import { addCap } from "@/lib/mongo/collections";
import { redirect } from "next/navigation";

export async function addColorAction(color: CapColor) {
    const user = await auth();

    if(user === null) return "Fehlende Berechtigungen";

    try {
        const res = await addCap({
            name: color.name.trim(),
            color: color.color
        });
    } catch(e) {
        return "Fehler beim Hinzufügen der Farbe (wahrscheinlich existiert sie bereits)";
    }

    redirect("/admin/colors")
}