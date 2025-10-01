"use server"

import { Swimmer } from "@/lib/model";
import { updateSwimmer } from "@/lib/mongo/collections/swimmers/updateSwimmer.function";
import { redirect } from "next/navigation";

export default async function swimmerUpdateAction(id: string, swimmer: Swimmer) {
    const s = Swimmer.parse(swimmer);
    
    try {
        await updateSwimmer({
            _id: id,
            ...s
        })
    } catch(e) {
        console.warn(e);
        return "Fehler beim updaten";
    }
    
    redirect(`/admin/swimmers/details/${id}`);
}