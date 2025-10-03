"use server"

import { auth } from "@/lib/auth/auth";
import { getSwimmersCollection } from "@/lib/mongo/collections"
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function closeAction(id: string, value: boolean) {
    const user = await auth();
    
    if(user === null) return "Fehlende Berechtigungen";

    try {
        const col = await getSwimmersCollection();

        const res = await col.updateOne({ _id: new ObjectId(id) }, { $set: { isClosed: value } })
    } catch (e) {
        console.warn(e);
        return "Konnte nicht geschlossen oder geöffnet werden!"
    }

    redirect(`/admin/swimmers/details/${id}`);
}