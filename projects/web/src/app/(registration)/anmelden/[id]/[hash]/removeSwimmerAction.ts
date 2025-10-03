"use server"

import checkHash from "@/lib/checkHash.function"
import { deleteSwimmer } from "@/lib/mongo/collections/swimmers/deleteSwimmer.function"
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function removeSwimmerAction(swimmerId: string, id: string, hash: string) {
    if (await checkHash(id, hash)) {
        const swimmer = await getSwimmer(swimmerId);

        if(swimmer?.isManaged && !swimmer.isRegistered) {   
            if (swimmer?.managerId === id) {
                await deleteSwimmer(swimmerId);
            }
        }
    }

    const path = `/anmelden/${id}/${hash}`;
    revalidatePath(path);
    redirect(path);
}