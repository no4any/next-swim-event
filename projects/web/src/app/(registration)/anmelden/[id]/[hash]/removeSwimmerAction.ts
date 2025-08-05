"use server"

import checkHash from "@/lib/checkHash.function"
import { deleteSwimmer } from "@/lib/mongo/collections/swimmers/deleteSwimmer.function"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function removeSwimmerAction(swimmerId: string, id: string, hash: string) {
    if(await checkHash(id, hash)) {
        await deleteSwimmer(swimmerId);
    }

    const path = `/anmelden/${id}/${hash}`;
    revalidatePath(path);
    redirect(path);
}