"use server"

import { Swimmer } from "@/lib/model";
import { updateSwimmer } from "@/lib/mongo/collections/swimmers/updateSwimmer.function";
import { redirect } from "next/navigation";
import { email } from "zod";

export default async function swimmerUpdateAction(id: string, swimmer: Swimmer) {
    const s = Swimmer.parse({
        ...swimmer,
        email: swimmer.isManaged ? undefined : swimmer.email
    });

    try {
        await updateSwimmer({
            _id: id,
            ...s
        })
    } catch (e) {
        console.warn(e);
        return "Fehler beim updaten";
    }

    redirect(`/admin/swimmers/details/${id}`);
}