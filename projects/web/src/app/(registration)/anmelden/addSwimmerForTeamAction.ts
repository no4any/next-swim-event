"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parseSwimmer } from "./addSwimmerAction";
import { addSwimmer } from "@/lib/mongo/collections";
import swimHash from "@/lib/swimHash.function";

export default async function addSwimmerForTeamAction(initialState: {}, data: FormData): Promise<{ userError?: boolean, teamError?: boolean }> {
    let redirectPath = "";

    try {
        const swimmer = await parseSwimmer(data);
        const swimmerAddResult = await addSwimmer(swimmer);

        const swimmerId = swimmerAddResult.insertedId instanceof Object ? swimmerAddResult.insertedId.toString() : swimmerAddResult.insertedId;
        redirectPath = `/anmelden/${swimmerId}/${await swimHash(swimmerId)}`;
    } catch (e) {
        console.log(e);
        return { userError: true }
    }

    revalidatePath(redirectPath);
    redirect(redirectPath);
}