"use server"

import { auth } from "@/lib/auth/auth";
import { CapColor } from "@/lib/model/CapColor.model";
import { updateCapColor } from "@/lib/mongo/collections";
import { redirect } from "next/navigation";

export default async function changeColorAction(id: string, capColor: CapColor) {
    const user = await auth();

    if(user === null) return "Fehlende Berechtigungen";

    const result = await  updateCapColor({_id: id, 
        name: capColor.name.trim(),
        color: capColor.color
    });

    if(result.modifiedCount > 0 ) redirect("/admin/colors");

    return "Fehler beim Ändern der Farbe (Name wahrscheinlich schon vergeben)";
}